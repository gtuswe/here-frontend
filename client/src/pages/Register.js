import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { registerAPI } from "./RegisterAPI";
import { useNavigate } from "react-router-dom";

function Register() {
  // React States
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    registerAPI({ mail, password, name, surname })
      .then((data) => {
        if (data.status === 200) {
          console.log(data);
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log("Error occurred"));
  };

  const updateForm = (event) => {
    const { name, value } = event.target;
    console.log(name);
    if (name === "mail") {
      setMail(value);
      console.log(value);
    } else if (name === "pass") {
      setPassword(value);
      console.log(value);
    } else if (name === "name") {
      setName(value);
      console.log(value);
    } else if (name === "surname") {
      setSurname(value);
      console.log(value);
    }
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="name-input">
          
          <input
            className="name"
            type="text"
            name="name"
            placeholder="First Name"
            onChange={updateForm}
            value={name}
            required
          />

          <input
            className="surname"
            type="text"
            name="surname"
            placeholder="Last Name"
            onChange={updateForm}
            value={surname}
            required
          />
        </div>

        <div className="input-container">
          <label>Email Address </label>
          <input
            type="text"
            name="mail"
            value={mail}
            onChange={updateForm}
            placeholder="Mail"
            required
          />
        </div>

        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            value={password}
            placeholder="Password"
            onChange={updateForm}
            required
          />
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
          Have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
