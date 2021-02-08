import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import  { ReactComponent as Logo } from "../assets/Logo.svg";
import { NavLink } from 'react-router-dom'
import "./header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header fadeHeader">
      <div className="logo-nav">
        <div className="logo-container">
          <NavLink exact to='/'>
            <Logo className="logo" />
          </NavLink>
        </div>
        <div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink exact to='/' >Home</NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to='/target-market'>Target Market</NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to='/content-outline' >Content Outline</NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to='/destination'>Destinations</NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to='/contact-us'>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
