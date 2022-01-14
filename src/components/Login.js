import React, { useState } from "react";
import logo from "../images/shopmelogo.png";
import "./Login.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./firebase-config";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const authentication = getAuth();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
  };
  const loginHandler = (e) => {
    signInWithEmailAndPassword(authentication, email, pass)
      .then((response) => {
        if (response) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
    e.preventDefault();
  };
  const signUpHandler = (e) => {
    createUserWithEmailAndPassword(authentication, email, pass)
      .then((response) => console.log(response))
      .catch((error) => alert(error.message));
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
      <button onClick={signUpHandler}>Create Account</button>
    </div>
  );
}

export default Login;
