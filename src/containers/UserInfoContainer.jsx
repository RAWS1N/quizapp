import React from "react";
import { UserInfo } from "../components";

function UserInfoContainer({ toggle, score,maxScore,reset }) {
  return (
    <div>
      <UserInfo draggable="true">
        <UserInfo.Exit onClick={toggle} src="avatars/close.png" />
        <UserInfo.Avatar src="avatars/rabbit.png" />
        <UserInfo.Greet>Welcome to the dashboard</UserInfo.Greet>
        <UserInfo.Score>Your current Score: {score}</UserInfo.Score>
        <UserInfo.Score> Your highest Score: {maxScore}</UserInfo.Score>
        <UserInfo.Reset onClick={reset}>Reset</UserInfo.Reset>
      </UserInfo>
    </div>
  );
}

export default UserInfoContainer;
