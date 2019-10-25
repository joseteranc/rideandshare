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

export default function OffererCard() {
  return (
    <Card>
      <ul>
        <Specification>Name: Head Hensley</Specification>
        <Specification>city: Berlin</Specification>
        <Specification>brand: BMW </Specification>
        <Specification>engine: 800 </Specification>
        <Specification>price per day: 160</Specification>
      </ul>
      <div>
        <CardImg
          src="https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/2018-bmw-r-1200-gs-adventure-updates-1.jpg"
          alt="BMW"
        />
      </div>
    </Card>
  );
}
