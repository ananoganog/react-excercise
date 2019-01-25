import * as React from 'react';
import {MembersTableComponent} from './components';

interface Props {
}

interface State {
  organizationName: string;
}

export class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { organizationName: 'lemoncode' };
  }


  public render() {
    return (
      <>
        <MembersTableComponent initialOrganizationName={this.state.organizationName} />
      </>
    );
  }
}