import React from "react";
import Login from "./Login";
import MainProfile from "./MainProfile";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/">Login</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}
