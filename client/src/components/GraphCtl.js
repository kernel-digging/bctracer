import React from 'react';
import {initial, size, inRange, isEmpty, last, trim, includes, pull}
  from 'lodash';
import {LOG_SPLIT, LOG_IGNORE, TYPE_CPU, TYPE_MISC}
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
      hasData: [],
      cpus: new Set(),
      filter: {
        [TYPE_CPU]: null,
        [TYPE_MISC]: {
          'data': false,
          'select': false,
        },
        selected: [],
      },
      init: false,
      update: false,
      codeView: false,
    };
  }

  // Graph Render
  shouldComponentUpdate(nextProps, nextState) { return nextState.update; }

  toggleRender = () => this.setState({update: !this.state.update});

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
  initCtx = (ctx, render) => this.setState({...ctx, init: true},
    () => this.initFilter(render));

  initFilter(render) {
    let filter = {...this.state.filter};
    let cpu = {};
    Array.from(this.state.cpus).sort().forEach(k => cpu[k] = true);
    filter[TYPE_CPU] = cpu;
    this.update({...{filter}}, render);
  }

  // Manipulating GraphFilter
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
    const {filter, hasData, traces: {[key]: trace}} = this.state;

    const cpuFilter = filter[TYPE_CPU][trace.cpu];

    let dataFilter = true;
    if (filter[TYPE_MISC]['data'] && !hasData.includes(key))
      dataFilter = false;

    let selectFilter = true;
    if (filter[TYPE_MISC]['select'] && !includes(filter['selected'], key))
      selectFilter = false;

    return cpuFilter && dataFilter && selectFilter;
  };

  parseTrace(data, render = true) {
    const lines = data.split('\n');
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
    this.initCtx({traces: traces, cpus: cpus}, render);
  }

  parseClass(data, render = true) {
    const {traces: _traces} = this.state;
    let traces = {..._traces};
    let hasData = [];

    if ('string'.eq(typeof data))
      data = JSON.parse(data);

    const trace_ts = Object.keys(_traces);
    const max_ts = last(trace_ts);
    Object.keys(data).sort().forEach((c, i, k) => {
      const [p, n] = [k[i - 1], k[i + 1]];
      const prev = (p) ? data[p] : null;

      const curr = data[c];
      const [ts, name] = c.split('/');
      const next_ts = (n) ? n.split('/')[0] : (max_ts > ts) ? max_ts : ts;

      const avail_ts = trace_ts.filter(_t =>
        inRange(_t, ts, next_ts) &&
        trim(_traces[_t].name).startsWith(`${name}()`),
      );

      // TODO: Check only one exists
      if (!isEmpty(avail_ts)) {
        hasData.push(avail_ts[0]);
        traces[avail_ts[0]].data = {...{prev, curr}};
      }
    });

    this.update({traces: traces, hasData: hasData}, render);
  }

  componentDidUpdate() {
    this.toggleRender();
  }

  render() {
    return this.props.children({
      ...this.state,
      onSelect: this.onSelect.bind(this),
      doFilter: this.doFilter.bind(this),
      parseTrace: this.parseTrace.bind(this),
      parseClass: this.parseClass.bind(this),
      toggleRender: this.toggleRender.bind(this),
      toggleCodeView: this.toggleCodeView.bind(this),
    });
  }
}

export default GraphCtl;
