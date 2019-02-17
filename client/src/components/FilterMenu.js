import React from 'react';
import {Menu} from 'semantic-ui-react';
import {CLASS_LOG, TYPE_CPU, TYPE_MISC} from '../constants/AppConstants';
import Filter from './Filter';

const FilterMenu = ({ctx}) => {
  return (
    <Menu size='mini'>
      <Menu.Item name='class'
                 onClick={() => ctx.parseClass(CLASS_LOG)}>
        Load Class
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item name='filter-misc'>
          <Filter type={TYPE_MISC} filter={ctx.filter.show}
                  action={ctx.doFilter(TYPE_MISC)}/>
        </Menu.Item>

        <Menu.Item name='filter-cpu'>
          <Filter type={TYPE_CPU} filter={ctx.filter.cpu}
                  action={ctx.doFilter(TYPE_CPU)}/>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default FilterMenu;
