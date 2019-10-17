import React from "react";
import styled from "styled-components";

const ContactButton = styled.button`
  background-color: #f43c10;
  border-radius: 5px;
  color: white;
  padding: 2px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
`;

export default function ContactOwner() {
  return <ContactButton>Contact Owner</ContactButton>;
}
