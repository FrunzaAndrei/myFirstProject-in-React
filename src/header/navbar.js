import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import "./header-style.css";
import IconHamb from "./hamburger-icon";

const Navbar = props => {
  return (
    <div className="navbar-div">
      <IconHamb displayMenu = {props.displayMenuH}/>
      <Logo lgName="MyProject" />
      <div></div>
      <Menu clasaMeniu="menu-principal"/>
    </div>
  );
};

export default Navbar;
