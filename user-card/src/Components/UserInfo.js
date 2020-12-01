import React from "react";

export default function UserInfo(props) {
  const userData = props.user.data;
  return (
    <div>
      <h2>Name:</h2>
      <p>{userData.name}</p>
      <h2>Bio:</h2>
      <p>{userData.bio}</p>
      <h2>Number of followers:</h2>
      <p>{userData.followers}</p>
      <h2>Number following:</h2>
      <p>{userData.following}</p>
    </div>
  );
}
