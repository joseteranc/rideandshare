import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
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
function Offers(onChange, filter, selectedValue) {
  let query = useQuery();
  return (
    <Router>
      <OfferSection
        onChange={event => {
          onChange(filter.city, event.target.value);
        }}
        value={selectedValue}
      >
        <option value="">SelectField</option>
        <Link to="/offers?city=berlin">Berlin</Link>;
        <Link to="/offers?city=hamburg">Hamburg</Link>;
        <Link to="/offers?city=cologne">Cologne</Link>;
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
