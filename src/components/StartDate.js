import React from "react";
import styled from "styled-components";

const StartDateField = styled.label`
  background-color: transparent;
  font-family: "Roboto", cursive;
`;

export default function StartDate() {
  return (
    <StartDateField>
      Start Date:
      <input
        type="date"
        id="start"
        name="trip-start"
        min="2019-10-24"
        max="2021-12-31"
      />
    </StartDateField>
  );
}
