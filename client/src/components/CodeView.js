import React from 'react';
import Prism from '../prism.js';
import '../prism.css';

import {
  Message, Grid, Icon, Header, Segment,
  Sidebar, Table, Dimmer, Loader,
} from 'semantic-ui-react';
import {exampleCode, axiosDBG, DBG} from '../constants/AppConstants';
import axios from 'axios';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';

axios.interceptors.response.use(
  (res) => axiosDBG(res), (err) => Promise.reject(axiosDBG(err)));

const CodeBlock = ({code, offset, line, keyword}) => (
  <pre className='line-numbers' data-start={offset} data-line={line}>
    <code className='language-clike'>
      {code.replace(/\t/g, '  ')}
    </code>
  </pre>
);

class CodeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: {
        url: `${DBG ? 'http://localhost:5000' : ''}/api`,
        status: false,
      },
      snippets: {},
      loading: false,
    };
    this.connect = this.connect.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props !== nextProps) || (this.state !== nextState);
  }

  componentWillUpdate(nextProps, nextState) {
    const {selected} = this.props;
    if (this.props !== nextProps && selected.length === 1) {
      this.fetchCode();
    }
  }

  toggle = () => this.setState({loading: !this.state.loading});

  connect() {
    let {server} = this.state;
    axios.get(server.url).then(res => {
        server.status = res.ok;
        this.setState({server});
      },
    );
  }

  fetchCode() {
    const {server, snippets: _snippets} = this.state;
    const {selected, traces, srcLine} = this.props;
    if (selected.length === 1) {
      const name = traces[selected[0]].name.trim();
      const key = srcLine[name.substr(0, name.indexOf('('))];

      let snippets = {..._snippets};

      if (key && !snippets[key]) {
        this.toggle();
        const location = key.split(':');
        axios.post(server.url + '/code', {
          'line': parseInt(location[1], 10) - 1, // TODO: temporary. Error on format
          'file': location[0],
        }).then(res => {
          snippets[key] = res.data.result;
          this.setState({snippets}, this.toggle);
        }).catch(err => {
            window.alert('Error. Please try later', err);
            this.toggle();
          },
        );
      }

    }
  }

  componentDidMount() {
    this.connect();
  }

  componentDidUpdate() {
    const {selected} = this.props;
    selected.length === 1 && Prism.highlightAll();
  }

  render() {
    const {visible, selected, traces, srcLine} = this.props;
    const {loading, server, snippets} = this.state;

    let key;
    if (selected.length === 1) {
      const name = traces[selected[0]].name.trim();
      key = srcLine[name.substr(0, name.indexOf('('))];
    }

    const code = snippets[key]
      ? snippets[key]
      : null;
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

              <Segment className="hello" basic>
                <Dimmer active={loading} inverted>
                  <Loader>Loading...</Loader>
                </Dimmer>

                <Header className='no-mar-top' as='h3'>
                  <Icon name='search'/>Code Viewer
                </Header>
                {(server.status && selected.length === 1 && code) ?
                  (<CodeBlock code={code} offset={key && key.split(':')[1]}
                              line={'2, 4-9'}/>)
                  :
                  <Message floating icon warning>
                    <Icon name='exclamation triangle'/>
                    <Message.Content>
                      <Message.Header>Select only one</Message.Header>
                      None or Multiple rows were selected
                    </Message.Content>
                  </Message>
                }
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Menu className='server-status' size='tiny' text fixed='top'>
          <Menu.Item>Status</Menu.Item>
          <Menu.Item content='>'/>
          <Menu.Item content={server.status ? 'Connected' : 'Not connected'}/>
          {!server.status &&
          <Menu.Menu position='right'>
            <Menu.Item onClick={this.connect}>
              <Icon name='arrow right'/>
              Click to connect
            </Menu.Item>
          </Menu.Menu>
          }
        </Menu>
      </Sidebar>
    );
  }
}

export default CodeView;
