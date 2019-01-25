import * as React from 'react';

interface Props {
    organizationName: string;
    onValueUpdated: (newName: string) => void;
  }

const onChange = (props : Props) => (e:React.ChangeEvent<HTMLInputElement>) => {
    props.onValueUpdated(e.target.value);
}

export const OrganizationNameEditComponent = (props :Props) =>
    <>
        <label>Insert github organization name:</label>
        <input value={props.organizationName} onChange={onChange(props)}/>
    </>
