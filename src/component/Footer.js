import React from "react";
import styled from "styled-components";
import Moto from "../icons/moto";
import Chat from "../icons/chat";
import Profile from "../icons/profile";

const Footer = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 12 px;
  justify-items: center;
  margin: auto;
  width: 300px;

  margin-bottom: 5px;
  background: #ede8e8;
  padding: 8px;
`;
export default function FooterBar() {
  return (
    <Footer>
      <Moto />
      <Chat />
      <Profile />
    </Footer>
  );
}
