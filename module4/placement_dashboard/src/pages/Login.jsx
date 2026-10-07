import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const emailRef = useRef(null);
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let isValid = true;

    if (email.trim() === "") {
      setEmailError("Email is required.");
      emailRef.current.focus();
      isValid = false;
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      emailRef.current.focus();
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password is required.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    login(email);

    alert("Login Successful!");

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-icon">
          🎓
        </div>

        <h1>Student Placement Dashboard</h1>

        <p className="login-subtitle">
          Welcome back! Login to continue.
        </p>

        <h2>Login</h2>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label>Email</label>

            <input
              ref={emailRef}
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {emailError && (
              <p className="form-error">
                {emailError}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {passwordError && (
              <p className="form-error">
                {passwordError}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;