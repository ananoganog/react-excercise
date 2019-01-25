import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';
import {OrganizationNameEditComponent} from '../organizationNameEdit';
import {} from 'core-js';

interface Props {
  initialOrganizationName: string;
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  members: Array<MemberEntity>,
  organizationName: string,
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersTableComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = {
      members: [],
      organizationName: this.props.initialOrganizationName,
    };
  }

  loadMembers = () => {
    memberAPI.getAllMembers(this.state.organizationName).then((members) =>
      this.setState({ members: members })
    );
  }

  updateOrganizationNameState = (organizationName : string) => {
    this.setState({ organizationName });
  }


  public render() {

    return (
      <div className="row">
        <h2> Members Page</h2>
        <OrganizationNameEditComponent
          organizationName={this.state.organizationName}
          onValueUpdated={this.updateOrganizationNameState}
        />
        <button
          onClick={this.loadMembers}
          disabled={this.state.organizationName === ''}
        >
        Load</button>
        <table className="table">
          <thead>
            <MemberHead />
          </thead>
          <tbody>
            {
              this.state.members.map((member: MemberEntity) =>
                <MemberRow key={member.id} member={member} />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
