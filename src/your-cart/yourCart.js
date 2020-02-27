import React from "react";
import "./yourCartStyle.css";
import ReceiptItems from "./yourReceipt";

const YourCart = props => {
  return (
    <div>
      {props.condition === true && (
        <div className="yourCartDiv1">
          <ul className="yourCartHeader">
            <li class="yourCartHeaderTitle">Product</li>
            <li class="yourCartHeaderUnitPrice">Unit Price</li>
            <li class="yourCartHeaderAmount">Amount</li>
            <li class="yourCartHeaderPrice">Price</li>
          </ul>
          {props.items.map(item => {
            if (item.itemSold) return <ReceiptItems item={item} else return />;
          })}
          <ul className="yourCartFooter">
            <li className="yourCartFooterInformation">Total Price :</li>
            <li className="yourCartFooterTotalPrice">{props.finalPrice} lei</li>
          </ul>
        </div>
      )}

      {props.condition === false && (
        <div className="yourCartDiv2">
          <h1> You did't buy anything!</h1>
        </div>
      )}
    </div>
  );
};

export default YourCart;
