import React from "react";

const DisplayBlank = props => {
  const displayBlock = display => {
    if (display === true) {
      return "displayBlockBlank";
    } else {
      return "displayNoneBlank";
    }
  };
  return (
    <div
      className="display-blank"
      id={displayBlock(props.displayItem)}
      onClick={() => {
        props.displayMenu();
      }}
    ></div>
  );
};

export default DisplayBlank;
