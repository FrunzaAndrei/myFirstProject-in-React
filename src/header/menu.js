import React from "react";
import { Link } from "react-router-dom";

const Menu = props => {
  return (
    <ul className={props.clasaMeniu}>
      <li className="menu-item">
        <Link to="/" className="menu-item-link">Home</Link>
      </li>
      <li className="menu-item">
        <Link to="/yourCart" className="menu-item-link">Your Cart</Link>
      </li>
      <li className="menu-item">
        <Link to="/contact" className="menu-item-link">Contact</Link>
      </li>
    </ul>
  );
};

export default Menu;
