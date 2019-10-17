import React from "react";
import styled from "styled-components";
import offers from "../api/data";
import ListItem from "../components/ListItem";

// const Item = styled.li`
//   list-style-type: none;
// `;
const ItemSelection = styled.div`
  color: blue;
`;

export default function Item() {
  return (
    <ItemSelection>
      {offers.map(offer => {
        return <ListItem offer={offer} />;
      })}
    </ItemSelection>
  );
}
