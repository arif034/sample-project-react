import { Component } from "react";

class RegComp extends Component {
  render() {
    const message = "Message in regular component";
    console.log("rendering regular component");
    return <div>{message}</div>;
  }
}

export default RegComp;
