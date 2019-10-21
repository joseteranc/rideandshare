import React from "react";
import LocationField from "../components/LocationField";
import SearchBar from "../components/SearchBar";

export default {
  title: "LocationField"
};

export const LocationFieldBar = () => (
  <>
    <LocationField>
      <SearchBar />
    </LocationField>
  </>
);
