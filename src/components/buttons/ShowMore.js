import React from "react";
import styled from "styled-components";

const ShowMoreButton = styled.button`
  background-color: #f43c10;
  border-radius: 5px;
  color: white;
  padding: 2px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  font-family: "Rye", cursive;
`;

export default function ShowMore() {
  return <ShowMoreButton>Show More</ShowMoreButton>;
}
