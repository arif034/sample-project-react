import React, { Component } from "react";

class AFragment extends Component {
  render() {
    return (
      <React.Fragment>
        <td>{this.props.value[0]}</td>
        <td>{this.props.value[1]}</td>
      </React.Fragment>
    );
  }
}

export default AFragment;
