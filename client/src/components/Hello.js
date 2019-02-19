import React, {Fragment} from 'react';
import {Button, Dimmer, Loader, Divider, Grid, Header, Icon, Segment}
  from 'semantic-ui-react';
import {Log} from '../constants/AppConstants';

class FileBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
    this.upload = this.upload.bind(this);
    this.success = this.success.bind(this);
  }

  input = null;

  upload() { this.input.click(); };

  setName(filename) {this.setState({name: filename});}

  success = (e) => {
    const {files} = e.target;

    if (files && files.length > 0) {
      const file = files[0];

      if (file.size <= 10 * 1024 * 1024) {
        const {type, ctx, loading: toggle} = this.props;
        let action, fileReader = new FileReader();

        if (type.eq('Trace'))
          action = ctx.parseTrace;
        else if (type.eq('Class'))
          action = ctx.parseClass;

        fileReader.onload = async ({res = true}) => {
          try {
            await action(fileReader.result, false);
          } catch (e) {
            res = false;
            if (e instanceof SyntaxError)
              window.alert('Not supported syntax. Upload JSON file.');
          }
          Log.info(`${action.name} result : ${res}`);
          toggle(res && type);
        };

        toggle();
        this.setName(file.name);
        setTimeout(() => fileReader.readAsText(file), 500);
      } else {
        window.alert('Upload file less than 10MB');
      }
    }
  };

  render() {
    const {active} = this.props;
    const {name} = this.state;
    return (
      <Fragment>
        <input style={{'display': 'none'}} type="file"
               ref={r => {this.input = r;}} onChange={this.success}/>
        <Button onClick={this.upload} primary toggle
                {...{active}} disabled={active}>
          {active ? `${name} Imported` : 'Select File'}
        </Button>
      </Fragment>
    );
  }
}

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      Trace: false,
      Class: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(key) {
    let state = {...this.state};
    state.loading = !this.state.loading;
    if (key)
      state[key] = !this.state[key];
    this.setState({...state});
  }

  render() {
    const {ctx} = this.props;
    const {loading, Trace, Class} = this.state;

    const msg = (Trace && Class) ? 'Render Start' : (Trace) &&
      'Skip Class and Start Render';
    const color = (Trace && Class) ? 'green' : (Trace) && 'red';
    return (
      <Fragment>

        <Segment className="hello" placeholder>
          <Dimmer active={loading} inverted>
            <Loader>Loading...</Loader>
          </Dimmer>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>And</Divider>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon>
                  <Icon name='search'/>
                  Load Trace file
                  <Header.Subheader
                    content={'Import your FTrace trace log to analyse.'}/>
                </Header>

                <FileBtn type='Trace' active={Trace}
                         loading={this.toggle} {...{ctx}}/>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name='chart bar'/>
                  Add Class Data
                  <Header.Subheader
                    content={'Import your Class data recorded with BPF'}/>
                </Header>
                <FileBtn type='Class' active={Class}
                         loading={this.toggle} {...{ctx}}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        {Trace &&
        <Button fluid animated color={color} inverted={Trace && Class}
                onClick={ctx.toggleRender}>
          <Button.Content visible content={msg}/>
          <Button.Content hidden>
            <Icon name='arrow right'/>
          </Button.Content>
        </Button>
        }
      </Fragment>
    );
  }
}

export default Hello;
