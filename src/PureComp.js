import { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    const message = "Message in pure component";
    console.log("rendering pure component");
    return <div>{message}</div>;
  }
}

export default PureComp;
