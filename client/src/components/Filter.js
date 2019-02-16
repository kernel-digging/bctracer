import React from 'react';
import {Segment, Table, Icon} from 'semantic-ui-react';
import Checkbox from 'semantic-ui-react/dist/commonjs/modules/Checkbox';
import {TYPE_CPU, TYPE_MISC} from '../constants/AppConstants';

// data-type='class'
const Filter = ({value, chk: defaultChecked, action}) =>
  <Checkbox {...{
    value,
    defaultChecked,
    onClick: action(value),
    label: `${value}ㅤ`,
  }}/>;

const Filters = ({type, filter, action}) => {
  let filters = [];
  Object.entries(filter).forEach(
    ([k, v]) => filters.push(<Filter key={`filter-${k}`} value={k}
                                     chk={v} {...{action}}/>));

  let header =
    type.eq(TYPE_CPU) ? '|ㅤFilter CPU >ㅤ' :
      type.eq(TYPE_MISC) ? '|ㅤShow Only >ㅤ' : '';

  return (
    <Segment className="no-mar no-pad" compact basic floated='right'>
      {header}
      {filters}
    </Segment>
  );
};

export default Filters;
