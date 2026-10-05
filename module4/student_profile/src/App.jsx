import Student from "./component/Student";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Student Details</h1>

      <Student
        name="Harini"
        rollNo="101"
        course="B.Tech Computer Science"
        college="DMI College of Engineering"
      />
    </div>
  );
}

export default App;