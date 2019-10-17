import React from "react";
import styled from "styled-components";
import offers from "../api/data";
import ListItem from "../components/ListItem";

// const Item = styled.li`
//   list-style-type: none;
// `;
const Items = styled.div`
  color: blue;
`;

export default function ItemSelection() {
  return (
    <Items>
      {offers.map(offer => {
        return <ListItem offer={offer} />;
      })}
      {/* {}
      <Item>Owner:Owner</Item>
      <Item>City:Hamburg</Item>
      <Item>Brand:BMW</Item>
      <Item>Engine:1000cc</Item>
      <Item>Price per day:EUR 150 </Item> */}
    </Items>
  );
}
