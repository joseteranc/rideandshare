import React from "react";
import styled from "styled-components";

const ReturnDateField = styled.label`
  background-color: transparent;
  font-family: "Roboto", cursive;
`;

export default function ReturnDate() {
  return (
    <ReturnDateField>
      Return Date:
      <input
        type="date"
        id="start"
        name="trip-end"
        min="2019-10-17"
        max="2020-12-31"
      />
    </ReturnDateField>
  );
}
