import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">Login</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default App;
