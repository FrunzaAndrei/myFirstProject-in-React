import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import "./header-style.css";
import IconHamb from "./hamburger-icon";
import CartIcon from "./cart-elem";

const Navbar = props => {
 return (
    <div className="navbar-div">
      <IconHamb displayMenu = {props.displayMenuH}/>
      <Logo lgName="MyProject" />
      {/* just space for flex */}
      <div></div> 
      <div></div>
      <div></div>
      {/* just space for flex */}
      <Menu clasaMeniu="menu-principal"/>
      <CartIcon numberItem={0}/>
    </div>
  );
};

export default Navbar;
