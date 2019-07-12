import React from 'react';

export interface Props {
  name: string;
  age: number;
}
export default class extends React.Component<Props> {

  render() {
    return (
      <React.Fragment>
        <div>name:{this.props.name}</div>
        <div>age:{this.props.age}</div>
      </React.Fragment>
    )
  }
}