import React from "react";
import Image from "../image/icons8.png";

const IconHamb = props => {
  const fctDispl = () => {
    props.displayMenu();
  };

  return (
    <div className="hamurger-icon" onClick={fctDispl}>
      <img src={Image} className="icon-img"/>
    </div>
  );
};

export default IconHamb;
