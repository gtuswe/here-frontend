import "./Login.css";

function Header() {
  return (
    <div className="header-css">
      <h1>Welcome Back!</h1>
      <h2>Sign In to your account</h2>
    </div>
  );
}

function EmailButton() {
  return (
    <div>
      <input type="email" placeholder="Email" />
    </div>
  );
}

function PasswordButton() {
  return (
    <div>
      <input type="password" placeholder="Password" />
    </div>
  );
}

function SubmitButton() {
  return (
      <div className="submit-button">
        <input className="submit" type="submit" value="Login" />
      </div>
  );
}

function LoginForm() {
  return (
    <div className="login-form-container">
      <form className="login-form">
        <div className="login-content">
        <EmailButton />
        <PasswordButton />
        <SubmitButton />
        </div>
      </form>
    </div>
  );
}

function Login() {
  return (
    <div className="main">
      <Header />
      <LoginForm />
    </div>
  );
}

export default Login;
