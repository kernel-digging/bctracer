import React from 'react';
import {Table} from 'semantic-ui-react';
import {isEmpty} from 'lodash';

const {Header, HeaderCell, Row, Body, Cell} = Table;

class TableRow extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps;
  }

  render() {
    let {ts, cpu, delta, name, visible, active, data, action} = this.props;
    return (visible(ts)) ? (
      <Row negative={!isEmpty(data)} {...{active}} onClick={action(ts)}>
        <Cell textAlign='center'>{ts}</Cell>
        <Cell textAlign='center'>{cpu}</Cell>
        <Cell textAlign='center'>{delta}</Cell>
        <Cell>{name.replace(/\s\s/g, 'ㅤ')}</Cell>
      </Row>) : '';
  }
}

const TableFrame = ({traces, visible, action}) => (
  <Table unstackable celled selectable compact='very'>
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
      map(k => <TableRow key={k} {...traces[k]} {...{visible, action}}/>)}
    </Body>
  </Table>
);

export default TableFrame;
