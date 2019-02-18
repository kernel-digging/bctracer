import {isEmpty, isEqual} from 'lodash';
import React from 'react';
import {Table} from 'semantic-ui-react';

const {Row, Body, Cell} = Table;

const ClassRow = ({k, v, pv}) => {
  let val = v, diff = !isEqual(v, pv);
  if (diff)
    val = `${pv} -> ${v}`;

  return (<Row>
    <Cell negative={diff}>{k}</Cell>
    <Cell negative={diff} textAlign='right'>{val}</Cell>
  </Row>);
};

class ClassTable extends React.Component {
  render() {
    let res = null;
    let {ts, data} = this.props;

    if (!isEmpty(data)) {
      const {prev: _prev, curr: _curr} = data;
      let rows = [];
      Object.entries(_curr).forEach(([k, v]) => {
        let pv = _prev[k] ? _prev[k] : v;
        rows.push(<ClassRow key={`${ts}_${k}`} {...{k, v, pv}} />);
      });
      res = (<Table compact='very'><Body>{rows}</Body></Table>);
    }

    return res;
  }
}

export default ClassTable;
