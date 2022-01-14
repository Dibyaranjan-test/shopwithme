import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/shopmelogo.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
  };
  const loginHandler = (e) => {
    console.log(email);
    console.log(pass);
    e.preventDefault();
  };
  return (
    <div className="login_container">
      <img src={logo} alt="Loading failed" />
      <form onSubmit={loginHandler}>
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" id="email" value={email} onChange={emailHandler} />

        <br />
        <label htmlFor="password"> Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={pass}
          onChange={passHandler}
        />

        <br />
        <input type="submit" value="Sign In" />
      </form>
      <h2>New User?</h2>
      <Link to="/Signup">
        <h2>Click Here to Register</h2>
      </Link>
    </div>
  );
}

export default Login;
