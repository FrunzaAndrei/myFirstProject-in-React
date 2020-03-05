import React from "react";
import { Link } from "react-router-dom";

const Menu = props => {
  return (
    <ul className={props.clasaMeniu}>
      <li className="menu-item">
        <Link to="/" className="menu-item-link">
          Home
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/your-cart" className="menu-item-link">
          Your Cart
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/add-product" className="menu-item-link">
          Add products
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
