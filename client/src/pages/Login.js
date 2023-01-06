import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  // React States
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  };

  const updateForm = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      console.log(value)
    } else if (name === "pass") {
      setPassword(value);
      console.log(value)
    }
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email Address </label>
          <input type="text" name="email" value={email} onChange={updateForm} required />
        </div>

        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>

        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <h1 className="welcome-title">Welcome Back 👋</h1>
      <h2 className="signin-title">Sign In to your account</h2>
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        <div className="title">
          Dont have an account?
          <Link className="signup-title" to="/register">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
