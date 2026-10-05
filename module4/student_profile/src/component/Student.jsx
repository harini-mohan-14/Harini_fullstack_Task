function Student(props) {
  return (
    <div className="student-card">
      <h2>Student Profile</h2>

      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Roll No:</strong> {props.rollNo}</p>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>College:</strong> {props.college}</p>
    </div>
  );
}

export default Student;