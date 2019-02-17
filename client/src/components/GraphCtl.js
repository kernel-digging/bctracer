import React from 'react';
import {initial, size, inRange, isEmpty, last, trim, includes, pull}
  from 'lodash';
import {LOG_SPLIT, LOG_IGNORE, TRACE_LOG, TYPE_CPU, TYPE_MISC}
  from '../constants/AppConstants';

const traceObj =
  (ts, cpu, delta, name) => ({
    ts,
    cpu,
    delta,
    name,
    data: {},
    visible: true,
    active: false,
  });

class GraphCtl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      traces: {},
      cpus: new Set(),
      filter: {
        [TYPE_CPU]: null,
        [TYPE_MISC]: {
          'data': false,
          'select': false,
        },
        selected: [],
      },
      render: false,
      codeView: false
    };
  }

  // Graph Render
  shouldComponentUpdate(nextProps, nextState) { return nextState.render; }

  toggleRender = () => this.setState({render: !this.state.render});

  update = (state, doRender = null) => this.setState(state,
    (doRender ? this.toggleRender : null));

  toggleCodeView = () => this.update({codeView: !this.state.codeView}, true);

  onSelect(key) {
    return () => {
      let traces = {...this.state.traces};
      let filter = {...this.state.filter};

      (traces[key].active = !traces[key].active) ?
        filter.selected.push(key) : pull(filter.selected, key);

      this.update({...traces, ...filter}, true);
    };
  }

  // Initialize Context
  initCtx = (ctx) => this.setState(ctx, this.initFilter);

  initFilter() {
    let filter = {...this.state.filter};
    let cpu = {};
    Array.from(this.state.cpus).sort().forEach(k => cpu[k] = true);
    filter[TYPE_CPU] = cpu;
    this.update({...{filter}}, true);
  }

  // Manipulating Filter
  doFilter(type) {
    return (value) => () => {
      let traces = {...this.state.traces};
      let filter = {...this.state.filter};
      filter[type][value] = !filter[type][value];

      Object.keys(traces).forEach(k => traces[k].visible = this.isVisible(k));

      this.update({...filter, ...traces}, true);
    };
  }

  isVisible(key) {
    const {filter, traces: {[key]: trace}} = this.state;

    let cpuFilter = filter[TYPE_CPU][trace.cpu];

    let dataFilter = true;
    if (filter[TYPE_MISC]['data'] && isEmpty(trace.data))
      dataFilter = false;

    let selectFilter = true;
    if (filter[TYPE_MISC]['select'] && !includes(filter['selected'], key))
      selectFilter = false;

    return cpuFilter && dataFilter && selectFilter;
  };

  parseTrace(data) {
    let lines = data.split('\n');
    let cpus = new Set();
    let traces = {}, idx = 0;

    lines.forEach((line) => {
      if (line[0] !== '#' && size(line)) {
        const row = line.split(LOG_SPLIT);
        const name = last(row);
        let [ts, cpu = 'X', delta] = initial(row).map(trim);

        LOG_IGNORE.forEach(i => (name.includes(i)) ? ts = `_${idx++}` : null);

        traces[ts] = traceObj(ts, cpu, delta, name);
        cpus.add(cpu);
      }
    });

    this.initCtx({traces: traces, cpus: cpus});
  }

  parseClass(data) {
    let {traces: _traces} = this.state;
    let traces = {..._traces};

    let trace_ts = Object.keys(_traces);
    Object.keys(data).sort().forEach((c, i, k) => {
      let [p, n] = [k[i - 1], k[i + 1]];
      let prev = (p) ? data[p] : null;

      let curr = data[c];
      let [ts, name] = c.split('/');
      let next_ts = (n) ? n.split('/')[0] : 99999999999999;

      let avail_ts = trace_ts.filter(_t =>
        inRange(_t, ts, next_ts) &&
        trim(_traces[_t].name).startsWith(`${name}()`),
      );

      if (!isEmpty(avail_ts)) {
        traces[avail_ts[0]].data = {...{prev, curr}};
      }
    });

    this.update({traces: traces}, true);
  }

  componentDidMount() {
    this.parseTrace(TRACE_LOG);
  }

  componentDidUpdate() {
    this.toggleRender();
  }

  render() {
    return this.props.children({
      ...this.state,
      onSelect: this.onSelect.bind(this),
      doFilter: this.doFilter.bind(this),
      parseClass: this.parseClass.bind(this),
      toggleCodeView : this.toggleCodeView.bind(this),
    });
  }
}

export default GraphCtl;
