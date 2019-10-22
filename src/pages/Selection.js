import React from "react";
import ShowOffers from "../components/buttons/ShowOffers";
import ReturnDate from "../components/ReturnDate";
import StartDate from "../components/StartDate";
import Logo from "../icons/Logo";
import Offers from "../components/Offers";
import Footer from "../components/Footer";

function Selection() {
  const [city, setCity] = React.useState("");
  return (
    <>
      <Logo />
      <Offers onChange={setCity} value={city} />
      <StartDate />
      <ReturnDate />
      <ShowOffers city={city} />
      <Footer />
    </>
  );
}

export default Selection;
