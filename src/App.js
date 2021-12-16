import "./styles.css";
import { Component } from "react";
//import Parent from './Parent.js'
// import Child from './Child.js'
import Parent2 from "./Parent2.js";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Child /> */}
        {/* <Parent /> */}
        <Parent2 />
      </div>
    );
  }
}
export default App;
