import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Registration() {
  const nameRef = useRef(null);
  const navigate = useNavigate();

  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");

    if (name.trim() === "") {
      setError("Please enter your name.");
      nameRef.current.focus();
      return;
    }

    if (email.trim() === "") {
      setError("Please enter your email.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (course.trim() === "") {
      setError("Please enter your course.");
      return;
    }

    const student = {
      name,
      email,
      course
    };

    register(student);

    alert("Registration Successful!");

    navigate("/");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-icon">
          🎓
        </div>

        <h1>Student Registration</h1>

        <p className="login-subtitle">
          Create your student placement account.
        </p>

        <form onSubmit={handleRegister}>

          <div className="form-group">
            <label>Name</label>

            <input
              ref={nameRef}
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Course</label>

            <input
              type="text"
              placeholder="Enter Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>

          {error && (
            <p className="form-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-button"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Registration;