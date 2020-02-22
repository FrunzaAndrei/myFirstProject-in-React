import React from "react";

const ButtonAdd = props => {
  const buyThisItem = () => {
    props.buy(props.item);
  };

  return (
    <div className="button-add">
      <p className="btn-add" onClick={buyThisItem}>
        Cumpara
      </p>
    </div>
  );
};

export default ButtonAdd;
