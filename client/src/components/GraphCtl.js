import React from 'react';
import {initial, size, inRange, isEmpty, last, trim, includes, pull, union}
  from 'lodash';
import {Log, LOG_SPLIT, LOG_IGNORE, TYPE_CPU, TYPE_MISC}
  from '../constants/AppConstants';

const GraphCtx = React.createContext();
const {Provider, Consumer: CtxConsumer} = GraphCtx;

const traceObj =
  (ts, cpu, delta, name) => ({
    ts,
    cpu,
    delta,
    name,
    data: {},
    args: [], // index for ClassTypes
    visible: true,
    active: false,
  });

class GraphCtl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      traces: {},
      shown: [],
      offset: 0, // index for rendered shown
      hasData: [],
      classTypes: [],
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
      codeView: true,
    };
  }

  // Graph Render
  shouldComponentUpdate(nextProps, nextState) { return nextState.update; }

  update = (state, doRender = null) => {
    const render = (doRender ? {update: !this.state.update} : {});
    this.setState({...state, ...render});
  };

  updateOffset = (offset = 0) => {
    const {traces} = this.state;
    const maxOffset = Object.keys(traces).length;
    (offset >= maxOffset) && (offset = maxOffset);
    Log.verbose(`Updating offset to ${offset}`);
    this.update({offset: offset});
  };

  toggleRender = () => {
    Log.debug('Toggle Render Called');
    this.update({}, true);
  };

  toggleCodeView = () => this.update({codeView: !this.state.codeView}, true);

  clearSelect = () => {
    let traces = {...this.state.traces};
    let filter = {...this.state.filter};
    filter.selected.forEach(k => traces[k].active = false);
    filter.selected = [];
    this.update({traces, filter}, true);
  };

  betweenSelect = () => {
    let traces = {...this.state.traces};
    let filter = {...this.state.filter};
    const {selected} = filter;
    const len = selected.length;
    if (len > 1) {
      selected.sort((a, b) => a - b);
      let {0: a, [len - 1]: b} = selected;

      const avail = Object.keys(traces).filter(k => (k > a) && (k < b));
      avail.forEach(k => traces[k].active = true);
      avail.unshift(selected[0]);
      avail.push(selected[1]);

      filter.selected = avail;
      this.update({traces, filter}, true);
    }
  };

  onSelect = (key) => () => {
    let traces = {...this.state.traces};
    let filter = {...this.state.filter};

    (traces[key].active = !traces[key].active) ?
      filter.selected.push(key) : pull(filter.selected, key);

    this.update({traces, filter}, true);
  };

  // Manipulating GraphFilter
  doFilter = (type) => (value) => () => {
    let traces = {...this.state.traces};
    let filter = {...this.state.filter};
    let shown = [];
    filter[type][value] = !filter[type][value];

    Object.keys(traces).forEach(k => {
      const visible = this.isVisible(k);
      traces[k].visible = visible;
      if (visible)
        shown.push(k);
    });
    this.updateOffset();
    this.update({filter, traces, shown: shown}, true);
  };

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
    let cpus = new Set(), classTypes = [];
    let traces = {}, idx = 0;

    lines.forEach((line) => {
      if (line[0] !== '#' && size(line)) {
        const row = line.split(LOG_SPLIT);
        const name = last(row);
        let [ts, cpu = 'X', delta] = initial(row).map(trim);

        LOG_IGNORE.forEach(i => name.includes(i) && (ts = `_${idx++}`));

        traces[ts] = traceObj(ts, cpu, delta, name);
        cpus.add(cpu);

        const [open, close] = [name.indexOf('('), name.indexOf(')')];
        if (close - open > 1) {
          // Shrink pointer whitespace. ' * *' => '**'
          const args = name.substring(open + 1, close).split(',').map(trim).
            map(arg => arg.replace(/ \*/g, '*'));
          classTypes = union(classTypes, args);
          traces[ts].args = args.map(arg => classTypes.indexOf(arg));
        }
      }
    });

    Log.debug(`parsed classTypes ${classTypes}`);
    const filter = this.initFilter(cpus);
    this.updateOffset();
    this.update(
      {traces, filter, classTypes, shown: Object.keys(traces), init: true},
      render);
  }

  initFilter(cpus, cpu = {}) {
    let filter = {...this.state.filter};
    Array.from(cpus).sort().forEach(k => cpu[k] = true);
    filter[TYPE_CPU] = cpu;
    return filter;
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
      const prev = (p) && data[p];

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

    this.update({traces, hasData}, render);
  }

  actions = {
    doFilter: this.doFilter.bind(this),
    onSelect: this.onSelect.bind(this),
    clearSelect: this.clearSelect.bind(this),
    betweenSelect: this.betweenSelect.bind(this),
    updateOffset: this.updateOffset.bind(this),
    parseTrace: this.parseTrace.bind(this),
    parseClass: this.parseClass.bind(this),
    toggleRender: this.toggleRender.bind(this),
    toggleCodeView: this.toggleCodeView.bind(this),
  };

  componentDidUpdate() {
    this.toggleRender();
  }

  render() {
    const {state, actions} = this;
    return (
      <Provider value={{state, actions}}>
        {this.props.children({...this.state})}
      </Provider>
    );
  }
}

export const WithCtx = (Component) => {
  return (props) => (
    <CtxConsumer>
      {ctx => <Component {...props} {...{ctx}}/>}
    </CtxConsumer>
  );
};

export default GraphCtl;
