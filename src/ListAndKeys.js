import { Component } from "react";
import Persons from "./Persons";
class ListAndKeys extends Component {
  render() {
    const persons = [
      {
        name: "Arif",
        age: 24,
        prof: "Software Developer"
      },
      {
        name: "Anup",
        age: 26,
        prof: "Software Developer"
      },
      {
        name: "Saurabh",
        age: 25,
        prof: "Software Developer"
      }
    ];
    const personsList = persons.map((person) => (
      <Persons key={person.age} person={person} />
    ));
    return <div>{personsList}</div>;
  }
}

export default ListAndKeys;
