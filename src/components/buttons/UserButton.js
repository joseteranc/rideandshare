import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserPageButton = styled.button`
  background-color: #f43c10;
  border-radius: 10px;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  font-family: "Rye", cursive;
`;

export default function UserPage() {
  return (
    <Link to={`/selection`}>
      <UserPageButton> User </UserPageButton>
    </Link>
  );
}
