import React from "react";
import styled from "styled-components";

const LocationField = styled.div;

export default function LocationFieldBar() {
  return (
    <LocationField>
      <div className="form-group">
        <label for="formGroupExampleInput">
          Where do you want to pick and return:
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Berlin, Hamburg, Cologne"
        ></input>
      </div>
    </LocationField>
  );
}
