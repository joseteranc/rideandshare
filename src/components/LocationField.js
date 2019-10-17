import React from "react";
import Offers from "../components/Offer";

// In order to create a component, icon, button do not forget to import React from "react"
// In order to use  styled-component, do not forget to import styled from "styled-components"

const Offers = styled.select`
  background-color: transparent;
`;
// To use styled-components is important to put the item after the  .
//const LocationFieldBar = styled.option`
//height: 50px;
//padding: 8px 20px;
//margin: 4px 0;
//color: black;
//background: white;
//box-sizing: border-box;
//border: 3px solid;
//`;
// in order to export the function is iportant to use export default (fun ction name)(){return()}
// Every component is writen with PascalCase
export default function LocationField() {
  return (
    <div>
      <p>Where do you want to pick it up and return:</p>

      <Offers />
    </div>
  );
}
