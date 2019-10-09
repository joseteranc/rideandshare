import React from "react";
import styled from "styled-components";
import Contactowner from "../button/contactowner";
const Card = styled.div`
  display: flex;
  width: 343px;
  height: 165px;
  margin-bottom: 20px;
  background: #646161;
  padding: 15px;
  color: black;
  border-radius: 15px;
  box-shadow: 0 5px 10px grey;
`;

const CardImg = styled.img`
  height: 100px;
`;
const Paragraph = styled.p`
  margin: 2px;
  font-size: 12px;
`;
const Lil = styled.li`
  list-style-type: none;
`;

//const CardCategory = styled.span`
//margin-right: 4px;
//font-weight: bold;
//`;

export default function ListItem() {
  return (
    <Card>
      <ul>
        <Lil>Owner:</Lil>
        <Lil>Type:</Lil>
        <Lil>Brand:</Lil>
        <Lil>Engine:</Lil>
        <Lil>Price per day:</Lil>
      </ul>
      <div>
        <CardImg />
        <Contactowner />
      </div>
    </Card>
  );
}
