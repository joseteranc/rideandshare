import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  margin: 10px;
  background: #ede8e8;
  padding: 15px;
  color: black;
  border-radius: 15px;
  box-shadow: 0 5px 10px grey;
`;

const CardImg = styled.img`
  width: 95px;
  height: 50%;
  border-radius: 10px;
  box-shadow: 10px 10px 10px grey;
`;

const Specification = styled.li`
  list-style-type: none;
`;

export default function ProfileCard() {
  return (
    <Card>
      <ul>
        <Specification>Name: Johny Marrony</Specification>
        <Specification>Member Since: 14-10-2019</Specification>
        <Specification> User Rank: 4 stars </Specification>
        <Specification>frequency: 3 times </Specification>
        <Specification>Age: 31 </Specification>
        <Specification>Driving Licence Since: july-2012 </Specification>
      </ul>
      <div>
        <CardImg
          src="https://images.unsplash.com/photo-1535294379103-d629272eee40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
          alt="Motorcyclist1"
        />
      </div>
    </Card>
  );
}
