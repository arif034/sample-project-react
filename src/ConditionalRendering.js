import { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "This is default message in conditional Rendering",
      toggle: true
    };
  }

  onClickHandlerWhenToggleOn(props) {
    if (this.state.toggle)
      this.setState({
        message: "Message when toggle is On",
        toggle: false
      });
  }

  onClickHandlerWhenToggleOff(props) {
    if (!this.state.toggle)
      this.setState({
        message: "Message when toggle is Off",
        toggle: true
      });
  }

  render() {
    if (this.state.toggle)
      return (
        <div>
          {this.state.message}
          <br />
          <button onClick={() => this.onClickHandlerWhenToggleOn()}>
            Click Me
          </button>
        </div>
      );
    else
      return (
        <div>
          {this.state.message}
          <br />
          <button onClick={() => this.onClickHandlerWhenToggleOff()}>
            Click Me
          </button>
        </div>
      );
  }
}

export default ConditionalRendering;
