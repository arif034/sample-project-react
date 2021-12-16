import { Component } from "react";
import ChildOfParent from "./ChildOfParent";
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Message which is in Parent"
    };
  }
  render() {
    return (
      <div>
        <ChildOfParent message={this.state.message} />
      </div>
    );
  }
}

export default Parent;
