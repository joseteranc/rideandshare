import React from "react";
import Footer from "../components/Footer";
import Logo from "../icons/Logo";
import ProfileButton from "../components/buttons/ProfileButton";
import MyRentalsButton from "../components/buttons/MyRentalsButton";
import NotificationsButton from "../components/buttons/NotificationsButton";

function Offerer() {
  return (
    <>
      <Logo />
      <ProfileButton />
      <MyRentalsButton />
      <NotificationsButton />
      <Footer />
    </>
  );
}

export default Offerer;
