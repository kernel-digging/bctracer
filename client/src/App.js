/* eslint no-extend-native: 'off' */
import React from 'react';
import {Container, Sidebar, Segment} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import './App.scss';
import Header from './components/Header';

import GraphCtl from './components/GraphCtl';
import Graph from './components/Graph';
import TopMenu from './components/TopMenu';
import CodeView from './components/CodeView';
import Hello from './components/Hello';

String.prototype.eq = function(_cmp) {
  return this.toString() === _cmp;
};

class App extends React.Component {
  ctxRef = null;

  render() {
    const mainClass = (codeView) => `main ${codeView ? 'code-view' : ''}`;
    return (
      <GraphCtl>
        {ctx => (
          <Sidebar.Pushable as={Segment}>
            {ctx.codeView && <CodeView visible={ctx.codeView}
                                       selected={ctx.filter.selected}/>}

            <Sidebar.Pusher>
              <Container className={mainClass(ctx.codeView)} fluid>
                <Container>
                  <div ref={r => this.ctxRef = r}>
                    <Header/>
                    <TopMenu {...{ctx, stickyRef: this.ctxRef}} />
                    {ctx.update || ctx.init ?
                      <Graph traces={ctx.traces}/> : <Hello {...{ctx}}/>}
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
