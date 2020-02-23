import React from "react";
import { Link } from "react-router-dom";

const Menu = props => {
  return (
    <ul className={props.clasaMeniu}>
      <li className="menu-item">
        <Link to="/" className="menu-item-link">Home</Link>
      </li>
      <li className="menu-item">
        <Link to="/about" className="menu-item-link">About</Link>
      </li>
      <li className="menu-item">
        <Link to="/contact" className="menu-item-link">Contact</Link>
      </li>
    </ul>
  );
};

export default Menu;
