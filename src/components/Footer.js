import React from "react";
import logo from "../images/Logo.svg";

export default function Footer() {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="logo" />
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div className="">
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h3>Contacts</h3>
          <ul>
            <li>
              Address: <br /> Lorem, ipsum dolor.
            </li>
            <li>
              Phone: <br /> +516521673
            </li>
            <li>
              Email: <br /> Lorem@ipsum.com
            </li>
          </ul>
        </div>
        <div className="">
          <h3>Social media links</h3>
          <ul>
            <li>
              <a href="/">facebook</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
