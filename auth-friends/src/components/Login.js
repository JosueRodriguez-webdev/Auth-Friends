import React, { useState } from "react";

function Login() {
  const [userInput, setUserInput] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <p>Login</p>
      <form>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
