import React from "react";

const Images = props => {
  return (
    <div className="image-cartonas">
      <img className="img-cartonas" src={props.imgLink} />
    </div>
  );
};

export default Images;
