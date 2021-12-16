import { Component } from "react";

class ParentToChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Message in Child to be sent to parent"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(props) {
    props.getValueHandler(this.state.message);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>Click Me</button>
      </div>
    );
  }
}

export default ParentToChild;
