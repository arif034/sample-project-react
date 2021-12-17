import { Component } from "react";
import Employee from "./Employee";
class ListAndKeys2 extends Component {
  render() {
    const employees = [
      {
        name: "Arif",
        job: "Software Developer",
        eid: 34512
      },
      {
        name: "Sahil",
        job: "Software Developer",
        eid: 34513
      },
      {
        name: "Ankit",
        job: "Software Developer",
        eid: 34514
      }
    ];

    const employeeList = employees.map((employee) => (
      <Employee employee={employee} />
    ));
    return <div>{employeeList}</div>;
  }
}

export default ListAndKeys2;
