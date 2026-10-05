import { useState } from "react";

function StudentMarks(props) {
  const [marks, setMarks] = useState(50);

  const increaseMarks = () => {
    setMarks(marks + 5);
  };

  const decreaseMarks = () => {
    setMarks(marks - 5);
  };

  return (
    <div>
      <h2>Student Name: {props.name}</h2>
      <h3>Subject: {props.subject}</h3>

      <h3>Marks: {marks}</h3>

      <button onClick={increaseMarks}>Increase Marks</button>
      <button onClick={decreaseMarks}>Decrease Marks</button>
    </div>
  );
}

export default StudentMarks;