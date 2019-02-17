import React from 'react';
import Prism from '../prism.js';
import '../prism.css';

import {Grid, Icon, Header, Segment, Sidebar, Table} from 'semantic-ui-react';

let example = `
    onSubmit(e) {
      e.preventDefault();
      const job = {
        title: 'Developer',
        company: 'Facebook'
        };
      }
    onSubmit(e) {
      e.preventDefault();
      const job = {
        title: 'Developer',
        company: 'Facebook'
        };
      }
  `;

const CodeBlock = ({snippet, line, keyword}) => (
  <pre className='line-numbers' data-line={line}>
    <code className='language-clike'>
      {snippet}
    </code>
  </pre>
);

class CodeView extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    let {visible, code = example} = this.props;
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
              <CodeBlock snippet={code} line={'2, 4-9'}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Sidebar>
    );
  }
}

export default CodeView;
