import React from 'react';
import Prism from '../prism.js';
import '../prism.css';

import {Message, Grid, Icon, Header, Segment, Sidebar, Table}
  from 'semantic-ui-react';
import {exampleCode} from '../constants/AppConstants';

const CodeBlock = ({snippet, line, keyword}) => (
  <pre className='line-numbers' data-line={line}>
    <code className='language-clike'>
      {snippet}
    </code>
  </pre>
);

class CodeView extends React.Component {
  componentDidUpdate() {
    const {selected} = this.props;
    selected.length === 1 && Prism.highlightAll();
  }

  render() {
    let {visible, selected, code = exampleCode} = this.props;
    return (
      <Sidebar as={Segment} animation='overlay' direction='right'
               className='code-view' width='very wide' visible={visible}>
        <Grid celled='internally' textAlign='center'>
          <Grid.Row stretched>
            <Grid.Column>
              <Header as='h3'>
                <Icon name='list'/>
                Stack Trace
              </Header>
              <Table compact='very'>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell
                      negative={true}>vma_compute_subtree_gap</Table.Cell>
                    <Table.Cell negative={true}>3</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell negative={true}>up_write</Table.Cell>
                    <Table.Cell negative={true}>3</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell negative={true}>down_write</Table.Cell>
                    <Table.Cell negative={true}>3</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell
                      negative={true}>vma_compute_subtree_gap</Table.Cell>
                    <Table.Cell negative={true}>3</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell
                      negative={true}>vma_compute_subtree_gap</Table.Cell>
                    <Table.Cell negative={true}>3</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell
                      negative={true}>vma_compute_subtree_gap</Table.Cell>
                    <Table.Cell negative={true}>3</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as='h3'>
                <Icon name='search'/>
                Code Viewer
              </Header>
              {selected.length === 1 ?
                <CodeBlock snippet={code} line={'2, 4-9'}/>
                :
                <Message floating icon warning>
                  <Icon name='exclamation triangle'/>
                  <Message.Content>
                    <Message.Header>Select only one</Message.Header>
                    Multiple rows are selected
                  </Message.Content>
                </Message>
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Sidebar>
    );
  }
}

export default CodeView;
