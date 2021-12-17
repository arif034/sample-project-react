import "./styles.css";
import { Component } from "react";
//import Parent from './Parent.js'
// import Child from './Child.js'
// // import Parent2 from "./Parent2.js";
// import ConditionalRendering from "./ConditionalRendering.js";
// import Array from "./Array";
// import OrderedList from "./OrderedList"
// import ListAndKeys from "./ListAndKeys";
import ListAndKeys2 from "./ListAndKeys2";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Child /> */}
        {/* <Parent /> */}
        {/* <Parent2 /> */}
        {/* <ConditionalRendering /> */}
        {/* <Array /> */}
        {/* <OrderedList/> */}
        {/* <ListAndKeys /> */}
        <ListAndKeys2 />
      </div>
    );
  }
}
export default App;
