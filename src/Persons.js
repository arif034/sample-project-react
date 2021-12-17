function Persons({ person }) {
  return (
    <div>
      {person.name} is {person.age} years old and is a {person.prof}
    </div>
  );
}

export default Persons;
