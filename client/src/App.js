/* eslint no-extend-native: 'off' */
import React from 'react';
import {Container, Sidebar, Segment} from 'semantic-ui-react';

import './App.scss';
import Header from './components/Header';

import GraphCtl from './components/GraphCtl';
import Graph from './components/Graph';
import FilterMenu from './components/FilterMenu';
import CodeView from './components/CodeView';
import Hello from './components/Hello';

// Maybe Later.
// TODO: apply prop-types.

String.prototype.eq = function(_cmp) {
  return this.toString() === _cmp;
};

class App extends React.Component {
  ctxRef = null;

  render() {
    return (
      <GraphCtl>
        {ctx => (
          <Sidebar.Pushable as={Segment}>
            <CodeView visible={ctx.codeView}/>

            <Sidebar.Pusher>
              <Container className={`main ${ctx.codeView ? 'code-view' : ''}`}
                         fluid>
                <Container>
                  <div ref={r => this.ctxRef = r}>
                    <Header/>
                    <FilterMenu {...{ctx, stickyRef: this.ctxRef}} />
                    {ctx.update || ctx.init ?
                      <Graph traces={ctx.traces} action={ctx.onSelect}/>
                      : <Hello {...{ctx}}/>}
                  </div>
                </Container>
              </Container>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        )}
      </GraphCtl>

    );
  }
}

export default App;
