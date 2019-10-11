import React from "react";
import styled from "styled-components";
// In order to create a component, icon, button do not forget to import React from "react"
// In order to use  styled-component, do not forget to import styled from "styled-components"

const LocationField = styled.div`
  background-color: transparent;
`;
// To use styled-components is important to put the item after the  .
const Input = styled.input`
  height: 50px;
  padding: 8px 20px;
  margin: 4px 0;
  color: grey;
  box-sizing: border-box;
  border: 3px solid black;
`;
// in order to export the function is iportant to use export default (fun ction name)(){return()}
// Every component is writen with PascalCase
export default function LocationFieldBar() {
  return (
    <LocationField>
      <div>
        <label>Where do you want to pick and return:</label>
        <p></p>
        <Input type="text" placeholder="Berlin, Hamburg, Cologne"></Input>
      </div>
    </LocationField>
  );
}
