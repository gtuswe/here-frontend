import React, { useState } from "react";
import "./Login.css";

function Login() {
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
        <div className="input-container">
          <label>Email Address </label>
          <input type="text" name="email" required />
        </div>

        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>

        <div className="button-container">
          <input type="submit"/>
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
        <div className="title">Dont have an account? <a className="signup-title" href="/register"> Sign Up</a> </div>
      </div>
    </div>
  );
}

export default Login;