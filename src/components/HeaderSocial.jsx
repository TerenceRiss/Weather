import React from "react";
import { FaUniversalAccess } from "react-icons/fa";
import { BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs";

export default function HeaderSocial() {
  return (
    <div className="header-social">
      <div className="header-social-content">
        {/* Logo Simplon */}
        <div className="header-social-logo">
          <FaUniversalAccess />
          <p className="header-social-text">SIMPLON.CO</p>
        </div>

        {/* Liens vers les réseaux sociaux */}
        <nav className="header-social-links">
          <ul className="flex gap-3 text-rose-600">
            {/* Lien Twitter */}
            <li className="header-social-icon">
              <BsTwitter />
            </li>

            {/* Lien LinkedIn */}
            <li className="header-social-icon">
              <BsLinkedin />
            </li>

            {/* Lien Facebook */}
            <li className="header-social-icon">
              <BsFacebook />
            </li>
          </ul>
        </nav>
      </div>

      {/* Ligne de séparation */}
      <hr />
    </div>
  );
}
