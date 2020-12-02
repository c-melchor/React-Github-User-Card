import React from "react";
import Followers from "./Followers";

export default function UserInfo(props) {
  const userData = props.user.data;
  console.log(userData, "USER DATA HERE");
  return (
    <div>
      <h2>Name:</h2>
      <p>{userData.name}</p>
      <img src={userData.avatar_url} alt="Christina Melchor's avatar" />
      <h2>Bio:</h2>
      <p>{userData.bio}</p>
      <h2>Number following:</h2>
      <p>{userData.following}</p>
      <h2>My followers:</h2>
      <Followers />
    </div>
  );
}
