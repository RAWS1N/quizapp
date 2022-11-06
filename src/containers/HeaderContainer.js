import React from "react";
import { Layout,UserInfo } from "../components";

function HeaderContainer({ score,toggle }) {
  return (
    <Layout.HeaderContainer>
      <Layout.Header>Quiz App</Layout.Header>
      <UserInfo.FlexContainer>
        <Layout.ScoreCard>score: {score}</Layout.ScoreCard>
      <Layout.Avatar onClick={toggle} src="avatars/rabbit.png" alt="user"/>
      </UserInfo.FlexContainer>
    </Layout.HeaderContainer>
  );
}

export default HeaderContainer;
