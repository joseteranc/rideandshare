import React from "react";
import styled from "styled-components";

const MyRentalsButtonSt = styled.button`
  background-color: #f8f5f5;
  border-radius: 5px;
  color: #050000;
  padding: 12px 90px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 50px 8px 50px 8px;
  font-family: "Roboto", cursive;
`;

export default function MyRentalsButton() {
  return <MyRentalsButtonSt>My rentals</MyRentalsButtonSt>;
}
