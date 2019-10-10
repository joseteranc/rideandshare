import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Moto from "../icons/moto";
import Profile from "../icons/profile";
import Chat from "../icons/chat";
import Showoffers from "../button/showoffers";
import Tritcher from "../icons/tritcher";
import Contactowner from "../button/contactowner";
import Star from "../icons/star";

export default {
  title: "Buttons"
};

export const text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const MotoIcon = () => <Moto />;
export const ProfileIcon = () => <Profile />;
export const ChatIcon = () => <Chat />;
export const Showoffersbutton = () => <Showoffers />;
export const TritcherIcon = () => <Tritcher />;
export const Contactownerbutton = () => <Contactowner />;
export const StarIcon = () => <Star />;
