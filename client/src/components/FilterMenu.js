import React from 'react';
import {CLASS_LOG, TRACE_LOG, TYPE_CPU, TYPE_MISC} from '../constants/AppConstants';
import Filter from './Filter';
import {Sticky, Menu, Dropdown} from 'semantic-ui-react';

const FilterMenu = ({ctx, stickyRef}) => {
  return (
    <Sticky context={stickyRef}>
      <Menu className='small-mar-top' size='mini'>
        <Menu.Item name='class'
                   onClick={() => ctx.parseTrace(TRACE_LOG)}>
          Load Trace
        </Menu.Item>
        <Menu.Item name='class'
                   onClick={() => ctx.parseClass(CLASS_LOG)}>
          Load Class
        </Menu.Item>
        <Menu.Item name='codeView'
                   onClick={ctx.toggleCodeView}>
          Code View
        </Menu.Item>


        {ctx.init ?
          <Menu.Menu position='right'>
            <Menu.Item name='filter-misc'>
              <Filter type={TYPE_MISC} filter={ctx.filter.show}
                      action={ctx.doFilter(TYPE_MISC)}/>
            </Menu.Item>

            <Menu.Item name='filter-cpu'>
              <Filter type={TYPE_CPU} filter={ctx.filter.cpu}
                      action={ctx.doFilter(TYPE_CPU)}/>
            </Menu.Item>

            <Dropdown item icon='filter' simple>
            </Dropdown>
          </Menu.Menu>
          : null}
      </Menu>
    </Sticky>
  );
};

export default FilterMenu;
