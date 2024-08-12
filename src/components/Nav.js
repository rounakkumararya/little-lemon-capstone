import React, { useState } from "react";
import logo from "../images/Logo.svg";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Nav() {
  const [menuOn, setMenuOn] = useState(false);

  const toggleMenu = () => {
    setMenuOn(!menuOn);
  };

  return (
    <nav className={`navbar ${menuOn ? "open" : ""}`}>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOn ? <IoClose /> : <IoMenu />}
      </div>

      <ul className={`nav-links ${menuOn ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">login</a>
        </li>
      </ul>
    </nav>
  );
}
