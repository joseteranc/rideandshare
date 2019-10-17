import React from "react";
import styled from "styled-components";
import offers from "../api/data";

const OfferSection = styled.select`
  width: 30%;
  height: 25px;
  background: #f8f5f5;
  flex-wrap: wrap;
  padding-top: 2px;
  border-style: Solid;
  border-width: 5px;
`;
function Offers() {
  return (
    <OfferSection>
      <option value="">SelectField</option>
      {offers.map(offer => {
        return <option offer={offer.city}>{offer.city} </option>;
      })}
    </OfferSection>
  );
}
export default Offers;
