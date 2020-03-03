import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import MainProfile from "./components/MainProfile";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Login} />
      <Route exact path="/profile" component={MainProfile} />
    </div>
  );
}

export default App;
