import { Component } from "react";

class ChildOfParent extends Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}

export default ChildOfParent;
