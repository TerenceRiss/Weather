import React from "react";
import FooterNavItem from "./FooterNavItem";
import SimplonLogoFooter from "../assets/images/simplon_logo_footer.svg";

export default function Footer() {
  // Tableau des éléments de navigation
  const footerNavItems = [
    "Mentions légales",
    "Nos actualités",
    "Nous rejoindre",
    "Contact",
    "Presse",
    "Plan du site",
    "Notre agence numérique",
  ];

  return (
    <footer className="bg-rose-600 w-screen text-white flex flex-col py-10 gap-10">
      <img className="w-36 mx-auto" src={SimplonLogoFooter} alt="Simplon Logo" />
      <nav>
        <ul className="flex flex-col md:flex-row justify-center items-center gap-3">
          {footerNavItems.map((title, index) => (
            <React.Fragment key={index}>
              <FooterNavItem title={title} />
              {index < footerNavItems.length - 1 && (
                <span className="hidden md:block">|</span>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
