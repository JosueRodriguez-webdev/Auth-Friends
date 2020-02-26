import React from "react";

function ProfilePost() {
  const signingOut = () => {
    window.localStorage.removeItem("token");
  };
  return (
    <div>
      <p>ProfilePost</p>
      <button onClick={signingOut}>Sign Out</button>
    </div>
  );
}

export default ProfilePost;
