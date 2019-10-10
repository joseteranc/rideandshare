import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Showoffers from "../button/showoffers";
import Trichter from "../icons/trichter";
import Contactowner from "../button/contactowner";
import Star from "../icons/star";

export default {
  title: "Buttons"
};

export const text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Showoffersbutton = () => <Showoffers />;
export const TrichterIcon = () => <Trichter />;
export const Contactownerbutton = () => <Contactowner />;
export const StarIcon = () => <Star />;
