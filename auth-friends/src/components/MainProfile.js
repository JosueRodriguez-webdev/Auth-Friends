import React from "react";
import ProfilePost from "./ProfilePost";
import FriendsList from "./FriendsList";
import { Redirect } from "react-router-dom";

function MainProfile() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <p>MainProfile</p>
      <ProfilePost />
      <FriendsList />
    </div>
  );
}

export default MainProfile;
