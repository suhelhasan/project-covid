import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styling from "./Header.module.css";
import logo from "../../images/logo1.png";

export default function Header() {
  // CHANGING NAVBAR ON SCROLL
  let [navStyle, setNavStyle] = useState(styling.Header);
  window.onscroll = function myFunction() {
    if (window.innerHeight / 7 > window.scrollY) {
      setNavStyle(styling.Header);
    } else {
      setNavStyle(styling.newHeader);
    }
  };

  return (
    <div className={navStyle}>
      <div className={styling.logo}>
        <p>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </p>
      </div>
      <div className={styling.PageLinks}>
        <p>
          <NavLink activeClassName={styling.active} exact to="/">
            Home
          </NavLink>
        </p>
        <p>
          <NavLink activeClassName={styling.active} exact to="/cases">
            Cases
          </NavLink>
        </p>
      </div>
    </div>
  );
}
