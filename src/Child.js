import { Component } from "react";
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Guest User",
      loggedIn: true
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    if (this.state.loggedIn)
      this.setState({
        message: "Guest User",
        loggedIn: false
      });
    else
      this.setState({
        message: "Arif",
        loggedIn: true
      });
  }
  render() {
    return (
      <div>
        Hello {this.state.message}
        <br />
        <button onClick={this.onButtonClick}> Click Me </button>
      </div>
    );
  }
}
export default Child;
