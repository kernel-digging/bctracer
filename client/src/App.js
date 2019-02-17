import React, { Fragment } from 'react'
import { Container, Menu } from 'semantic-ui-react'

import './App.css'
import Header from './components/Header'

import GraphCtl from './components/GraphCtl'
import Graph from './components/Graph'
import Filters from './components/Filter'
import { CLASS_LOG, TYPE_CPU, TYPE_MISC } from './constants/AppConstants'
import FilterMenu from './components/FilterMenu'

String.prototype.eq = function (_cmp) {
  return this.toString() === _cmp
}

class App extends React.Component {
  render () {
    return (
      <Container>
        <Header/>
        <GraphCtl>
          {ctx => ctx.render ?
            <Fragment>
              <FilterMenu {...{ctx}} />
              <Graph traces={ctx.traces} visible={ctx.isVisible}
                     action={ctx.onSelect}/>
            </Fragment>
            : ''
          }
        </GraphCtl>
      </Container>
    )
  }
}

export default App
