import React, { Fragment } from 'react'
import { Container } from 'semantic-ui-react'

import './App.css'
import Header from './components/Header'

import GraphCtl from './components/GraphCtl'
import Graph from './components/Graph'
import Filters from './components/Filter'
import {CLASS_LOG, TYPE_CPU, TYPE_MISC} from './constants/AppConstants';

String.prototype.eq = function(_cmp) {
  return this.toString() === _cmp;
};

class App extends React.Component {
  render () {
    return (
      <Container>
        <Header/>
        <GraphCtl>
          {ctx => ctx.render ?
            <Fragment>
              <Container onClick={()=>ctx.parseClass(CLASS_LOG)}>Hello World</Container>
              <Filters type={TYPE_CPU} filter={ctx.filter.cpu}
                       action={ctx.doFilter(TYPE_CPU)}/>
              <Filters type={TYPE_MISC} filter={ctx.filter.show}
                       action={ctx.doFilter(TYPE_MISC)}/>
              <Graph traces={ctx.traces}/>
            </Fragment>
            : ''
          }
        </GraphCtl>
      </Container>
    )
  }
}

export default App
