import React from "react";

const ReceiptItems = props => {
  return (
    <ul class="receiptUl">
      <li class="receiptLi1">{props.item.title}</li>
      <li class="receiptLi4">{props.item.price}</li>
      <li class="receiptLi2">{props.item.itemSold}</li>
      <li class="receiptLi3">{props.item.itemSold * props.item.price} lei</li>
    </ul>
  );
};

export default ReceiptItems;
