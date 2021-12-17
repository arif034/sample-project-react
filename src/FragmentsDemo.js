import { Component } from "react";
import AFragment from "./AFragment";

class FragmentsDemo extends Component {
  render() {
    const value1 = ["Arif", "Anup"];
    const value2 = ["AK", "AT"];
    return (
      <div>
        <table>
          <tr>
            <AFragment value={value1} />
          </tr>
          <tr>
            <AFragment value={value2} />
          </tr>
        </table>
      </div>
    );
  }
}
export default FragmentsDemo;
