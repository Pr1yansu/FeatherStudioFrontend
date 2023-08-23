import { ReactNavbar } from "overlay-navbar";
import React from "react";
import {
  BiSolidUserCircle,
  BiSolidUser,
  BiSolidDashboard,
} from "react-icons/bi";

const Header = ({ isAuthenticated }) => {
  return (
    <header className="relative">
      <img
        src="/assets/img/Logo.png"
        alt="Logo.png"
        className="absolute top-[1.5vmax] h-14 left-[2.5%]"
      />
      <ReactNavbar
        logo="/assets/img/Logo.png"
        burgerColor="#FFD700"
        navColor1="#181818"
        burgerColorHover="#D4AF37"
        logoWidth="80%"
        logoHoverColor="#FFD700"
        link1Size="16px"
        link1Color="#d9d9d9"
        link1Padding="1vmax"
        link1ColorHover="#FFD700"
        nav2justifyContent="flex-end"
        link1Margin="1vmax"
        link2Margin="0"
        link3Margin="0"
        link4Margin="1vmax"
        nav3justifyContent="flex-start"
        link1Text="Home"
        link2Text="About"
        link3Text="Gallery"
        link4Text="Contact"
        nav4justifyContent="flex-start"
        link1Url="/"
        link2Url="/About"
        link3Url="/Gallery"
        link4Url="/Contact"
        profileIcon={true}
        ProfileIconElement={isAuthenticated ? BiSolidUser : BiSolidUserCircle}
        profileIconColorHover="#FFD700"
        profileIconSize="36px"
        profileIconUrl={isAuthenticated === true ? "/Profile" : "/Login"}
        cartIcon={isAuthenticated && true}
        CartIconElement={isAuthenticated && BiSolidDashboard}
        cartIconUrl={isAuthenticated && "/Dashboard"}
      />
    </header>
  );
};

export default Header;
