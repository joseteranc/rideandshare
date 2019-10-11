import React from "react";
import styled from "styled-components";
import Moto from "../icons/Moto";
import Chat from "../icons/Chat";
import Profile from "../icons/Profile";

const Footer = styled.nav`
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 12 px;
  justify-items: center;

  width: 400px;

  margin-bottom: 5px;
  background: #ede8e8;
  padding: 8px;
`;
export default function FooterBar() {
  return (
    <Footer>
      <a href="/js/">
        <Moto />
      </a>
      <a href="/js/">
        <Chat />
      </a>
      <a href="/js/">
        <Profile />
      </a>
    </Footer>
  );
}
