import React from "react";
import styled from "styled-components";

const ReturnDate = styled.label`
  background-color: transparent;
`;

export default function StartDateField() {
  return (
    <ReturnDate for="start">
      Retrun Date:
      <input
        type="date"
        id="start"
        name="trip-start"
        value="yyyy-mm-dd"
        min="2019-10-14"
        max="2020-12-31"
      />
    </ReturnDate>
  );
}
