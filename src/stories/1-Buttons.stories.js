import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Showoffers from "../components/buttons/ShowOffers";
import Trichter from "../icons/Trichter";
import Contactowner from "../components/buttons/ContactOwner";
import ButtonSizes from "../components/buttons/ButtonSizes";
import Star from "../icons/Star";

export default {
  title: "Buttons"
};

export const text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Showoffersbutton = () => (
  <Showoffers onClick={action("clicked")}>Show Me Offers</Showoffers>
);
export const TrichterIcon = () => <Trichter />;
export const Contactownerbutton = () => <Contactowner />;
export const StarIcon = () => <Star />;
export const ButtonSizes1 = () => <Button />;
