import { Component } from "react";
import ParentToChild from "./ParentToChild";

class Parent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Message in Parent"
    };
    this.getValueHandler = this.getValueHandler.bind(this);
  }

  getValueHandler(props) {
    this.setState({
      message: props
    });
  }

  render() {
    return (
      <div>
        {this.state.message}
        <ParentToChild value={this.getValueHandler} />
      </div>
    );
  }
}

export default Parent2;
