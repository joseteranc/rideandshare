import React from "react";
import FooterBar from "../components/Footer";
import Header from "../components/Header";
import ItemSelection from "../components/Item";
import offers from "../api/data";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Offers() {
  const query = useQuery();

  const filteredOffers = offers.filter(
    offer => offer.city === query.get("city")
  );
  return (
    <>
      <Header />
      <ItemSelection offers={filteredOffers} />
      <FooterBar />
    </>
  );
}

export default Offers;
