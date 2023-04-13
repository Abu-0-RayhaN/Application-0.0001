import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import Logo from "../../assets/logo.svg";
// BEM-> Block Element Modifier is the convention we are using for naming css clsses
const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
