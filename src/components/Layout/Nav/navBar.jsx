import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navBar.css";
import { BiMenuAltLeft } from "@react-icons/all-files/bi/BiMenuAltLeft";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import Logo from "../../../assets/images/red-logo.png";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false); // TODO:work on navbar responsiveness

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} className="logo" alt="logo" />
          </Link>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/about">About</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/">Our Services</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/">Blog&News</Link>
          </li>
          <li className=" option" onClick={closeMobileMenu}>
            <Link to="/">contact</Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <FaTimes className="menu-icon" />
        ) : (
          <BiMenuAltLeft className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default NavBar;
