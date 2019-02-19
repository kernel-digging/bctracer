import {isEqual} from 'lodash';
import React from 'react';
import {Table} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const {Row, Body, Cell} = Table;

const DiffRow = ({k, v, pv}) => {
  let val = v, diff = !isEqual(v, pv);
  if (diff)
    val = `${pv} -> ${v}`;

  return (<Row>
    <Cell negative={diff}>{k}</Cell>
    <Cell negative={diff} textAlign='right'>{val}</Cell>
  </Row>);
};

class ClassDiff extends React.Component {
  render() {
    const {ts, data: {prev: _prev, curr: _curr}} = this.props;
    const rows = Object.entries(_curr).map(([k, v]) =>
      (<DiffRow key={`${ts}_${k}`} {...{k, v, pv: _prev ? _prev[k] : v}} />));
    return (<Table compact='very'><Body>{rows}</Body></Table>);
  }
}

ClassDiff.propTypes = {
  data: PropTypes.shape({
    prev: PropTypes.object,
    curr: PropTypes.object.isRequired,
  }),
};

export default ClassDiff;
