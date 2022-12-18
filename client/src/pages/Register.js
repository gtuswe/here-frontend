import React, { useState } from "react";
import "./Register.css";

function Register() {
  // React States
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="name-input">
          <input  className="name" type="text" name="name" placeholder="First Name" required />
          <input className="surname" type="text" name="surname" placeholder="Last Name" required />
        </div>

        <div className="input-container">
          <label>Email Address </label>
          <input type="text" name="email" required />
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
      <h1 className="start-title">Let's start 🚀</h1>
      <h2 className="create-title">Create new account</h2>
      <div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        <div className="title">
          Dont have an account?{" "}
          <a className="signup-title" href="/register">
            {" "}
            Sign Up
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Register;
