import "./App.css";
import Head from "./components/Head.js";
import Body from "./components/Body.js";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Head />
              <Body />
            </React.Fragment>
          }
        />
        <Route
          path="/checkout"
          element={
            <React.Fragment>
              <Head />
              <Cart />
            </React.Fragment>
          }
        />
        <Route
          path="/login"
          element={
            <React.Fragment>
              <Login />
            </React.Fragment>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
