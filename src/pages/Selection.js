import React from "react";
import Footer from "../components/Footer";
import LocationFieldBar from "../components/LocationField";
import ReturnDate from "../components/ReturnDate";
import StartDate from "../components/StartDate";
import Logo from "../icons/Logo";
import ShowMeOffers from "../components/buttons/ShowOffers";

function Offers() {
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

export default Offers;
