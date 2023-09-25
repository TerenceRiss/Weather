import React from "react";

export default function FooterNavItem({ title }) {
  const itemStyle = {
    textDecoration: "none",
    padding: "5px 10px",
    border: "1px solid transparent",
    borderRadius: "20px",
    transition: "all 0.3s ease-in-out",
  };

  const hoverStyle = {
    textDecoration: "underline",
    textDecorationOffset: "4px",
  };

  return (
    <li>
      <a
        className="hover-style"
        href="#"
        style={itemStyle}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.color = "#ff4081";
          e.target.style.borderColor = "#ff4081";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "white";
          e.target.style.borderColor = "transparent";
        }}
      >
        {title}
      </a>
    </li>
  );
}
