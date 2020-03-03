import React from "react";
import { useHistory } from "react-router-dom";

function ProfilePost() {
  let history = useHistory();

  const signingOut = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    history.push(`/`);
  };
  return (
    <div>
      <p>ProfilePost</p>
      <button onClick={signingOut}>Sign Out</button>
    </div>
  );
}

export default ProfilePost;
