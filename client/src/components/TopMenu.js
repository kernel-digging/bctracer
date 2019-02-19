import React, {Fragment} from 'react';
import {
  CLASS_LOG, DBG,
  TRACE_LOG,
  TYPE_CPU,
  TYPE_MISC,
} from '../constants/AppConstants';
import GraphFilter from './GraphFilter';
import {Sticky, Menu, Dropdown} from 'semantic-ui-react';
import {WithCtx} from './GraphCtl';

const TopMenu = ({ctx, stickyRef}) => {
  const {state, actions} = ctx;
  return (
    <Sticky context={stickyRef}>
      <Menu className='small-mar-top' size='mini'>
        {DBG &&
        <Fragment>
          <Menu.Item name='class' content={'Load Trace'}
                     onClick={() => actions.parseTrace(TRACE_LOG)}/>
          <Menu.Item name='class' content={'Load Class'}
                     onClick={() => actions.parseClass(CLASS_LOG)}/>
          <Menu.Item name='codeView' content={'Code View'}
                     onClick={actions.toggleCodeView}/>
        </Fragment>
        }

        {state.init &&
        <Menu.Menu position='right'>
          <Menu.Item name='filter-misc'>
            <GraphFilter type={TYPE_MISC}/>
          </Menu.Item>

          <Menu.Item name='filter-cpu'>
            <GraphFilter type={TYPE_CPU}/>
          </Menu.Item>

          <Dropdown item icon='filter' simple>
          </Dropdown>
        </Menu.Menu>
        }
      </Menu>
    </Sticky>
  );
};

export default WithCtx(TopMenu);
