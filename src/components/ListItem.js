import React from "react";
import styled from "styled-components";
import Contactowner from "./buttons/ContactOwner";

const Card = styled.div`
  display: flex;

  margin-bottom: 20px;
  background: #ede8e8;
  padding: 15px;
  color: black;
  border-radius: 15px;
  box-shadow: 0 5px 10px grey;
`;

const CardImg = styled.img`
  background: skyblue;
`;

const Specification = styled.li`
  list-style-type: none;
`;

export default function ListItem({ offer }) {
  return (
    <Card>
      <ul>
        <Specification>Owner:Owner</Specification>
        <Specification>City:Hamburg</Specification>
        <Specification>Brand:BMW</Specification>
        <Specification>Engine:1000cc</Specification>
        <Specification>Price per day:EUR 150 </Specification>
      </ul>
      <div>
        <CardImg />
        <Contactowner />
      </div>
    </Card>
  );
}
