import React from "react";

export default function HeaderNavItem({ title, children }) {
  return (
    <li className="header-nav-item">
      <a href="#" className="header-nav-link">
        {title}
      </a>
      {children}
    </li>
  );
}
