import React from "react";
import Menu from "./menu";

const HamburgerContain = props => {

    const displayBlock = (display)=>{
        if (display === true) {
             return "displayBlock";
        }else{
            return "displayNone";
        }
    }

  return (
    <div className="hamburger-contain" id={displayBlock(props.displayItem)}>
      <Menu clasaMeniu="hamburger-menu" />
    </div>
  );
};

export default HamburgerContain;
