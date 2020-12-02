import React from "react";
import Followers from "./Followers";
import "../styles/followers.css";

export default function UserInfo(props) {
  const userData = props.user.data;
  console.log(userData, "USER DATA HERE");
  return (
    <div className="me">
      <h2>{userData.name}</h2>
      <img src={userData.avatar_url} alt="Christina Melchor's avatar" />
      <p>{userData.bio}</p>
      <h2>Following:</h2>
      <p>{userData.following}</p>
      <div>
        <h2 className="followersTag">My Followers:</h2>
        <Followers />
      </div>
    </div>
  );
}
