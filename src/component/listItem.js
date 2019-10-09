import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
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

//const CardCategory = styled.span`
//margin-right: 4px;
//font-weight: bold;
//`;

export default function ListItem() {
  return (
    <Card>
      <CardImg />
      hello
    </Card>
  );
}
