import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import styled from "styled-components";

const OfferSection = styled.select`
  width: 65%;
  height: 25px;
  background: #f8f5f5;
  flex-wrap: wrap;
  padding-top: 2px;
  border-style: Solid;
  border-width: 5px;
`;
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Offers({ onChange, value }) {
  let query = useQuery();
  return (
    <Router>
      <OfferSection
        onChange={event => {
          onChange(event.target.value);
        }}
        value={value}
      >
        <option value="">SelectField</option>
        <option>Berlin</option>;<option>Hamburg</option>;
        <option>Cologne</option>;
        <Child city={query.get("city")} />
      </OfferSection>
    </Router>
  );
}
function Child({ city }) {
  return (
    <div>
      {city ? (
        <h3>
          The <code>city</code>in the query string is &quot;{city}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}
export default Offers;
