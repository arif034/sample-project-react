function Employee({ employee }) {
  return (
    <div>
      {employee.name} has id {employee.eid} and works as a {employee.job}
    </div>
  );
}

export default Employee;
