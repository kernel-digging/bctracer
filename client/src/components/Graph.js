import React from 'react';
import {Popup, Table} from 'semantic-ui-react';
import {isEmpty, isEqual} from 'lodash';
import ClassDiff from './ClassDiff';
import {Log} from '../constants/AppConstants';

const {Header, HeaderCell, Row, Body, Cell} = Table;

class GraphRow extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const {visible: c_visible, active: c_active, data: c_data} = this.props;
    const {visible: n_visible, active: n_active, data: n_data} = nextProps;

    const _visible = !isEqual(c_visible, n_visible);
    const _active = !isEqual(c_active, n_active);
    const _data = !isEqual(c_data, n_data);

    return _visible || _active || _data;
  }

  render() {
    const {ts, cpu, delta, name, visible, active, data, action} = this.props;
    const hasData = !isEmpty(data);
    Log.debug(`GraphRow ${ts} render ${visible}`);
    return (visible) && (
      <Row negative={hasData} {...{active}} onClick={action(ts)}>
        <Popup trigger={<Cell textAlign='center'>{ts}</Cell>}
               position='left center' disabled={!hasData}>
          <Popup.Content>
            {hasData && <ClassDiff {...{data, ts}}/>}
          </Popup.Content>
        </Popup>
        <Cell textAlign='center'>{cpu}</Cell>
        <Cell textAlign='center'>{delta}</Cell>
        <Cell>{name.replace(/\s\s/g, 'ㅤ')}</Cell>
      </Row>);
  }
}

const GraphTable = ({traces, action}) => (
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
    {Object.keys(traces).
      map(k => <GraphRow key={k} {...traces[k]} {...{action}}/>)}
    </Body>
  </Table>
);

export default GraphTable;
