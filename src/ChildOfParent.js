import { Component } from "react";

class ChildOfParent extends Component {
  render() {
    return <div>Hello - {this.props.message}</div>;
  }
}

export default ChildOfParent;
