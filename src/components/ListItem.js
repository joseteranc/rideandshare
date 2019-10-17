import React from "react";
import styled from "styled-components";
import ContactOwner from "../components/buttons/ContactOwner";
const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  background: #ede8e8;
  padding: 10px;
  color: black;
  border-radius: 15px;
  box-shadow: 0 5px 10px grey;
  justify-content: space-around;
`;
const Item = styled.div`
  color: black;
`;
const Division = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 10px;
  justify-content: space-between;
`;

const CardImg = styled.img`
  width: 120px;
  height: 50%;
  border-radius: 10px;
  box-shadow: 10px 10px 10px grey;
`;

export default function ListItem({ offer }) {
  return (
    <Card>
      <ul>
        <Item>Owner:{offer.name}</Item>
        <Item>City:{offer.city}</Item>
        <Item>Brand:{offer.brand}</Item>
        <Item>Engine:{offer.engine}</Item>
        <Item>Price:{offer.price}</Item>
      </ul>

      <Division>
        <CardImg src={offer.picture} alt="" />

        <ContactOwner />
      </Division>
    </Card>
  );
}
