import React from "react";
import styled from "styled-components";

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

export default function ProfileCard() {
  return (
    <Card>
      <ul>
        <Specification>Name:Name and Lastname</Specification>
        <Specification>Member Since: Date</Specification>
        <Specification> User Rank: rank </Specification>
        <Specification>frequency: times user have rent </Specification>
        <Specification>Age: Age </Specification>
        <Specification>Driving Licence Since: Since </Specification>
      </ul>
      <div>
        <CardImg />
      </div>
    </Card>
  );
}
