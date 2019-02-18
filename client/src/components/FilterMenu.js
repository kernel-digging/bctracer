import React, {Fragment} from 'react';
import {
  CLASS_LOG, DBG,
  TRACE_LOG,
  TYPE_CPU,
  TYPE_MISC,
} from '../constants/AppConstants';
import Filter from './Filter';
import {Sticky, Menu, Dropdown} from 'semantic-ui-react';

const FilterMenu = ({ctx, stickyRef}) => {
  return (
    <Sticky context={stickyRef}>
      <Menu className='small-mar-top' size='mini'>
        {DBG ?
          <Fragment>
            <Menu.Item name='class' content={'Load Trace'}
                       onClick={() => ctx.parseTrace(TRACE_LOG)}/>
            <Menu.Item name='class' content={'Load Class'}
                       onClick={() => ctx.parseClass(CLASS_LOG)}/>
            <Menu.Item name='codeView' content={'Code View'}
                       onClick={ctx.toggleCodeView}/>
          </Fragment>
          : null}

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
