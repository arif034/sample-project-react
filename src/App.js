import "./styles.css";
import { Component } from "react";
import Child from "./Child.js";
class App extends Component {
  render() {
    return (
      <div>
        <Child sample />
      </div>
    );
  }
}
export default App;
