/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Icon from "../image/cart.png";

const CartIcon = props => {
  return (
    <div className="cart-icon">
      <img src={Icon} className="cart-icon-img" />
      <p className="cart-number-items">{props.numberItem()}</p>
      <p className="cart-total-price" > Total plata: {props.finalPrice()} lei</p>
    </div>
  );
};

export default CartIcon;
