/* eslint no-extend-native: 'off' */
import React from 'react';
import {Container, Sidebar, Segment} from 'semantic-ui-react';

import './App.scss';
import Header from './components/Header';

import GraphCtl from './components/GraphCtl';
import Graph from './components/Graph';
import FilterMenu from './components/FilterMenu';
import CodeView from './components/CodeView';

// Maybe Later.
// TODO: apply prop-types.

String.prototype.eq = function(_cmp) {
  return this.toString() === _cmp;
};

class App extends React.Component {
  render() {
    return (
      <GraphCtl>
        {ctx => ctx.render ?
          <Sidebar.Pushable as={Segment}>
            <CodeView visible={ctx.codeView}/>

            <Sidebar.Pusher>
              <Container className={`main ${ctx.codeView ? 'code-view' : ''}`}
                         fluid>
                <Container>
                  <Header/>
                  <FilterMenu {...{ctx}} />
                  <Graph traces={ctx.traces} action={ctx.onSelect}/>
                </Container>
              </Container>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
          : null
        }
      </GraphCtl>

    );
  }
}

export default App;
