import { Component } from "react";

class Array extends Component {
  render() {
    const array1 = [1, 2, 3, 4, 5, 6];
    return (
      <h2>
        {array1.map((value) => (
          <h2>{value}</h2>
        ))}
      </h2>
    );
  }
}

export default Array;
