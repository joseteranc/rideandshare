import React from "react";
import styled from "styled-components";

const StartDateField = styled.label`
  background-color: transparent;
`;

export default function StartDate() {
  return (
    <StartDateField for="start">
      Start Date:
      <input
        type="date"
        id="start"
        name="trip-start"
        min="2019-10-14"
        max="2020-12-31"
      />
    </StartDateField>
  );
}
