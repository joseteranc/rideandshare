import React from "react";
import styled from "styled-components";
import SmallLogo from "../icons/SmallLogo";
import Tritcher from "../icons/Trichter";

const HeaderBar = styled.header`
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 12 px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
  margin-bottom: 5px;
  background: #707070;
  padding: 8px;
`;

export default function Header() {
  return (
    <HeaderBar>
      <span></span>
      <SmallLogo />
      <Tritcher />
    </HeaderBar>
  );
}
