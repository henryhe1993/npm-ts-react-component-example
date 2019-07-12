import React from "react";
import D1 from './d1';

export interface HelloProps { compiler: string; framework: string; }

export default class Hello extends React.Component<HelloProps> {
  render() {
    return (
      <React.Fragment>
        <h1>ts react component</h1>
        <D1 name={this.props.compiler} age={1}></D1>
      </React.Fragment>
    )
  }
}