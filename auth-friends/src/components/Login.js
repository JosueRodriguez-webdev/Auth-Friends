import React, { useState } from "react";
import axios from "axios";

function Login(props) {
  console.log(props);
  const [userInput, setUserInput] = useState({
    username: "",
    password: ""
  });
  console.log(userInput);

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginURL = "http://localhost:5000/api/login";
    axios
      .post(loginURL, userInput)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          name="username"
          onChange={handleChange}
          value={userInput.username}
        />
        <br />
        <label htmlFor="password">password: </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={userInput.password}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
