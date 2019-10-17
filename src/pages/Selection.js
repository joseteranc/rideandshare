import React from "react";
import ShowMeOffers from "../components/buttons/ShowOffers";
import Footer from "../components/Footer";
import LocationFieldBar from "../components/LocationField";
import ReturnDate from "../components/ReturnDate";
import StartDate from "../components/StartDate";
import Logo from "../icons/Logo";

function Selection() {
  return (
    <>
      <Logo />
      <LocationFieldBar />
      <StartDate />
      <ReturnDate />
      <ShowMeOffers />
      <Footer />
    </>
  );
}

export default Selection;
