import React from "react";
import FooterBar from "../components/Footer";
import Logo from "../icons/Logo";
import UserPage from "../components/buttons/UserButton";
import OffererPage from "../components/buttons/OffererButton";

function Home() {
  return (
    <>
      <Logo />
      <UserPage />
      <OffererPage />

      <FooterBar />
    </>
  );
}

export default Home;
