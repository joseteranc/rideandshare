import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Chat from "../icons/ChatIcon";
import Offers from "../icons/OffersIcon";
import Profile from "../icons/ProfileIcon";

const FooterBar = styled.nav`
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 12 px;
  justify-items: center;

  width: 400px;

  margin-bottom: 5px;
  background: #f8f5f5;
  padding: 8px;
`;
export default function Footer() {
  let { url } = useRouteMatch();
  return (
    <FooterBar>
      <Link to="offers">
        <Offers />
      </Link>
      <Link to="chat">
        <Chat />
      </Link>
      <Link to="profile">
        <Profile />
      </Link>
    </FooterBar>
  );
}
