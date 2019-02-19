import React from 'react';
import {Segment} from 'semantic-ui-react';
import Checkbox from 'semantic-ui-react/dist/commonjs/modules/Checkbox';
import {TYPE_CPU, TYPE_MISC} from '../constants/AppConstants';
import {WithCtx} from './GraphCtl';

// CPU 0 will remain unchecked due to it's value: 0.
const Filters = ({value, chk: defaultChecked, action}) =>
  <Checkbox {...{
    value,
    defaultChecked,
    onClick: action(value),
    label: `${value}ㅤ`,
  }}/>;

const GraphFilter = ({type, ctx: {state, actions}}) => {
  const [filter, action] = [state.filter[type], actions.doFilter(type)];
  let filters = [];
  Object.entries(filter).forEach(
    ([k, v]) => filters.push(<Filters key={`filter-${k}`} value={k}
                                      chk={v} {...{action}}/>));

  const header = {
    [TYPE_CPU]: 'Filter CPU >ㅤ',
    [TYPE_MISC]: 'Show Only >ㅤ',
  }[type];

  return (
    <Segment className="no-mar no-pad" compact basic floated='right'>
      {header}
      {filters}
    </Segment>
  );
};

export default WithCtx(GraphFilter);
