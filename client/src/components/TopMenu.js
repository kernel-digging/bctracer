import React, {Fragment} from 'react';
import {
  CLASS_LOG, DBG,
  TRACE_LOG,
  TYPE_CPU,
  TYPE_MISC,
} from '../constants/AppConstants';
import GraphFilter from './GraphFilter';
import {Sticky, Menu} from 'semantic-ui-react';
import {WithCtx} from './GraphCtl';

const TopMenu = ({ctx, stickyRef}) => {
  const {state, actions} = ctx;
  return (
    <Sticky context={stickyRef}>
      <Menu className='small-mar' size='mini'>
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
          <Menu.Item onClick={actions.clearSelect} content={'Clear Select'}/>
          <Menu.Item onClick={actions.betweenSelect} content={'Select Between'}/>
          <Menu.Item name='filter-misc'>
            <GraphFilter type={TYPE_MISC}/>
          </Menu.Item>

          <Menu.Item name='filter-cpu'>
            <GraphFilter type={TYPE_CPU}/>
          </Menu.Item>
          </Menu.Menu>
        }
      </Menu>
    </Sticky>
  );
};

export default WithCtx(TopMenu);
