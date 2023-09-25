import React from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import HeaderNavItem from "./HeaderNavItem";
import SimplonLogo from "../assets/images/simplon_logo.png";

export default function HeaderNavBar() {
  return (
    <div className="header-navbar">
      <div className="header-navbar-content">
        {/* Logo Simplon */}
        <img className="header-logo" src={SimplonLogo} alt="Simplon Logo" />

        {/* Icône de menu pour les écrans de petite taille (mobiles) */}
        <BsList className="header-menu-icon md:hidden" />

        {/* Barre de navigation */}
        <nav className="header-nav md:block">
          <ul className="header-nav-list flex gap-5 font-bold">
            {/* Élément de navigation avec une flèche vers le bas */}
            <HeaderNavItem title={"VOUS VOULEZ"}>
              <BiSolidChevronDown />
            </HeaderNavItem>
            
            {/* Élément de navigation standard */}
            <HeaderNavItem title={"WELCOME"} />
            
            {/* Élément de navigation standard */}
            <HeaderNavItem title={"NOS actualités"} />
          </ul>
        </nav>
      </div>
    </div>
  );
}
