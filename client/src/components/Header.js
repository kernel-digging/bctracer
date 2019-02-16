import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const _Header = () => (
    <Header className="no-mar-bot page header" as='h2'>
      <Icon name='binoculars' />
      <Header.Content>
        BCTracer
        <Header.Subheader>Class Tracer featured by BPF</Header.Subheader>
      </Header.Content>
    </Header>
);

export default _Header
