import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Login from "./components/Login";
import MainProfile from "./components/MainProfile";

function App() {
  return (
    <div className="App">
      <Link to="/">Login</Link>
      <Link to="/profile">Profile</Link>

      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/profile">
        <MainProfile />
      </Route>
    </div>
  );
}

export default App;
