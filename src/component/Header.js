import React from "react";
import styled from "styled-components";
import SmallLogo from "../icons/SmallLogo";
import Tritcher from "../icons/tritcher";

const Header = styled.header`
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 12 px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 300px;
  margin-bottom: 5px;
  background: #707070;
  padding: 8px;
`;

export default function HeaderBar() {
  return (
    <Header>
      <span></span>
      <SmallLogo />
      <Tritcher />
    </Header>
  );
}
