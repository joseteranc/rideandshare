import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

export default function SearchBarFunction() {
  return (
    <Router>
      <SearchBar />
    </Router>
  );
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchBar() {
  let query = useQuery();

  return (
    <div>
      <div>
        <h2>Where do you want to pick it up and return:</h2>
        <ul>
          <li>
            <Link to="/offers?city=berlin">Berlin</Link>
          </li>
          <li>
            <Link to="/offers?city=hamburg">Hamburg</Link>
          </li>
          <li>
            <Link to="/offers?city=cologne">Cologne</Link>
          </li>
        </ul>

        <Child city={query.get("city")} />
      </div>
    </div>
  );
}

function Child({ city }) {
  return (
    <div>
      {city ? (
        <h3>
          The <code>city</code> in the query string is &quot;{city}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}
