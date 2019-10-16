import React from "react";
import styled from "styled-components";

const ReturnDate = styled.label`
  background-color: transparent;
`;

export default function ReturnDateField() {
  return (
    <ReturnDate for="start">
      Retrun Date:
      <input
        type="date"
        id="start"
        name="trip-end"
        min="2019-10-14"
        max="2020-12-31"
      />
    </ReturnDate>
  );
}
