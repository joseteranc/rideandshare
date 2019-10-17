import React from "react";
import styled from "styled-components";

const ShowOffersButton = styled.button`
  background-color: #f43c10;
  border-radius: 5px;
  color: white;
  padding: 4px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
`;

export default function ShowOffers() {
  return <ShowOffersButton> Show Offers </ShowOffersButton>;
}
