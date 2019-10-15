import React from "react";
import styled from "styled-components";
import Chat from "../icons/ChatIcon";
import Profile from "../icons/ProfileIcon";
import Offers from "../icons/OffersIcon";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch
} from "react-router-dom";

const Footer = styled.nav`
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 12 px;
  justify-items: center;

  width: 400px;

  margin-bottom: 5px;
  background: #f8f5f5;
  padding: 8px;
`;
export default function FooterBar() {
  let { url } = useRouteMatch();
  return (
    <Footer>
      <Link to="offers">
        <Offers />
      </Link>
      <Link to="chat">
        <Chat />
      </Link>
      <Link to="profile">
        <Profile />
      </Link>
    </Footer>
  );
}
