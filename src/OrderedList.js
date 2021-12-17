import { Component } from "react";

class OrderedList extends Component {
  render() {
    const arrays = ["Sample1", "Sample2", "Sample3", "Sample4"];
    return (
      <div>
        <ol>
          {arrays.map((element) => (
            <li>{element}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default OrderedList;
