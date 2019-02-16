import React from 'react';
import {initial, size, inRange, isEmpty, last, trim} from 'lodash';
import {
  LOG_SPLIT,
  LOG_IGNORE,
  TRACE_LOG,
  TYPE_CPU,
  TYPE_MISC,
} from '../constants/AppConstants';

const traceObj = (ts, cpu, delta, name) => ({
  ts,
  cpu,
  delta,
  name,
  data: {},
  active: false,
  visible: true,
});

class GraphCtl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      traces: {},
      cpus: new Set(),
      filter: null,
      render: false,
    };
  }

  /* Graph Render */
  shouldComponentUpdate(nextProps, nextState) { return nextState.render; }

  toggleRender() {
    this.setState({render: !this.state.render});
  }

  update(state, doRender = null) {
    this.setState(state, (doRender ? this.toggleRender : null));
  }

  /* Initialize Context */
  initCtx(ctx) { this.setState(ctx, this.initFilter); }

  initFilter() {
    let cpu = {}, show = {'data': false, 'selected': false};
    Array.from(this.state.cpus).sort().forEach(k => cpu[k] = true);
    this.update({filter: {[TYPE_CPU]: cpu, [TYPE_MISC]: show}}, true);
  }

  /* Manipulating Filter */
  doFilter(type) {
    const {filter: _filter, traces: _traces} = this.state;
    let filter = {..._filter}, traces = {..._traces};

    return (value) => () => {
      console.log('Do Filter ', type, value, filter[type][value]);
      filter[type][value] = !filter[type][value];
      console.log('Do Filter ', type, value, filter[type][value]);

      Object.entries(_traces).forEach(([_k, _v]) => {
        if (type.eq(TYPE_CPU) && _v[type].eq(value)) {
          traces[_k] = {..._v, visible: !_v.visible};
        }
        if (type.eq(TYPE_MISC) && isEmpty(_v[type])) {
          traces[_k] = {..._v, visible: !_v.visible};
        }
      });

      this.update({traces: traces, filter: filter}, true);
    };
  }

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
        console.log(avail_ts[0], prev, curr);
      }
    });

    this.update({traces: traces}, true);
  }

  // $(`[f-ts='${avail_ts[0]}']`).addClass('negative').popup({
  //   position: 'top center',
  //   html: diffData(prev, curr),
  // });

  // CLASS_LOG

  componentDidMount() {
    this.parseTrace(TRACE_LOG);
  }

  componentDidUpdate() {
    this.toggleRender();
  }

  render() {
    return this.props.children({
      ...this.state,
      doFilter: this.doFilter.bind(this),
      parseClass: this.parseClass.bind(this),
    });
  }
}

export default GraphCtl;
