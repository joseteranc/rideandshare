import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Logo from "../icons/logo";
import Moto from "../icons/moto";
import Profile from "../icons/profile";
import Chat from "../icons/chat";
import Showoffers from "../button/showoffers";
import Tritcher from "../icons/tritcher";
import Contactowner from "../button/contactowner";
import Star from "../icons/star";
import SmallLogo from "../icons/SmallLogo";

export default {
  title: "Button"
};

export const text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Logoname = () => <Logo />;
export const MotoIcon = () => <Moto />;
export const ProfileIcon = () => <Profile />;
export const ChatIcon = () => <Chat />;
export const Showoffersbutton = () => <Showoffers />;
export const TritcherIcon = () => <Tritcher />;
export const Contactownerbutton = () => <Contactowner />;
export const StarIcon = () => <Star />;
export const SmallLogoname = () => <SmallLogo />;
