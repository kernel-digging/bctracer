import React from 'react';
import {Popup, Table, Visibility} from 'semantic-ui-react';
import {isEmpty, isEqual} from 'lodash';
import ClassDiff from './ClassDiff';
import {Log, UNIT_OFFSET} from '../constants/AppConstants';
import {WithCtx} from './GraphCtl';

const {Header, HeaderCell, Row, Body, Cell} = Table;

const ArgHighlight = ({arg: Arg, idx}) => {
  const arg = Arg.split(' ').reverse();
  const del = (idx) ? ', ' : '';
  return [
    (<span className='args'
           style={{'color': 'deeppink'}}>{del}{arg.pop()} </span>),
    (<span className='args'
           style={{'color': 'purple'}}>{arg.pop()} </span>),
    ...arg.map(a => <span style={{'color': 'black'}}>{a}</span>),
  ];
};

class graphRow extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const {visible: c_visible, active: c_active, data: c_data} = this.props;
    const {visible: n_visible, active: n_active, data: n_data} = nextProps;

    const _visible = !isEqual(c_visible, n_visible);
    const _active = !isEqual(c_active, n_active);
    const _data = !isEqual(c_data, n_data);

    return _visible || _active || _data;
  }

  funcName = () => {
    const {ts, args, name: _name} = this.props;
    let name = _name, label = [], end = null;
    if (!isEmpty(args)) {
      const {ctx: {state: {classTypes}}} = this.props;
      name = name.substr(0, name.indexOf('(') + 1) + ' ';
      label = args.map((i, idx) =>
        <ArgHighlight key={`${ts}_arg${i}`} {...{arg: classTypes[i], idx}}/>);
      end = ' ) {';
    }
    return [name, label, end];
  };

  render() {
    const {ts, cpu, delta, visible, active, data} = this.props;
    const {ctx: {actions: {onSelect}}} = this.props;
    const hasData = !isEmpty(data);
    const [name, label, end] = this.funcName();
    return (visible) && Log.debug(`GraphRow ${ts} render ${visible}`) && (
      <Row negative={hasData} {...{active}} onClick={onSelect(ts)}>
        <Popup trigger={<Cell textAlign='center'>{ts}</Cell>}
               position='left center' disabled={!hasData}>
          <Popup.Content>
            {hasData && <ClassDiff {...{data, ts}}/>}
          </Popup.Content>
        </Popup>
        <Cell textAlign='center'>{cpu}</Cell>
        <Cell textAlign='center'>{delta}</Cell>
        <Cell>
          {name.replace(/\s\s/g, 'ㅤ')}
          {label}{end}
        </Cell>
      </Row>);
  }
}

const GraphRow = WithCtx(graphRow);

class GraphTable extends React.Component {
  state = {
    calculations: {
      direction: 'none',
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false,
    },
  };

  handleUpdate = (e, {calculations}) => {
    this.setState({calculations});
  };

  // TODO: apply debounce
  componentDidUpdate() {
    const {calculations: {bottomVisible}} = this.state;
    const {ctx: {actions: {toggleRender, updateOffset}}} = this.props;
    const {ctx: {state: {offset}}} = this.props;
    if (bottomVisible) {
      toggleRender();
      updateOffset(offset + UNIT_OFFSET);
    }
  }

  componentDidMount() {
    const {ctx: {actions: {updateOffset}}} = this.props;
    const {ctx: {state: {offset}}} = this.props;
    updateOffset(offset + UNIT_OFFSET);
  }

  render() {
    const {ctx: {state: {traces, shown, offset}}} = this.props;
    const Shown = shown.slice(0, offset + UNIT_OFFSET);
    return (
      <Visibility onUpdate={this.handleUpdate}>
        <Table unstackable selectable celled compact='very'>
          <Header>
            <Row>
              <HeaderCell wide={3} textAlign='center'>Timestamp</HeaderCell>
              <HeaderCell wide={1} textAlign='center'>CPU</HeaderCell>
              <HeaderCell wide={2} textAlign='center'>Delta</HeaderCell>
              <HeaderCell wide={10}>Functions</HeaderCell>
            </Row>
          </Header>

          <Body>
          {Shown.map(k => <GraphRow key={k} {...traces[k]}/>)}
          </Body>
        </Table>
      </Visibility>
    );
  }
}

export default WithCtx(GraphTable);
