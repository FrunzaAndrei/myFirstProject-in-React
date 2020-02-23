import React from "react";
import { FaStar } from "react-icons/fa/index";
import { FaRegStar } from "react-icons/fa/index";

const Review = props => {
  let numberStar = props.numberStars;
  let numberEmptyStar = 5 - numberStar;
  const objects = [];

  if (numberEmptyStar !== 0) {
    for (let i = 0; i < numberStar; i++) {
      objects.push(<FaStar color="yellow" size="1.5em" />);
    }
    for (let i = 0; i < numberEmptyStar; i++) {
      objects.push(<FaRegStar color="yellow" size="1.5em" />);
    }
  } else {
    for (let i = 0; i < numberStar; i++) {
      objects.push(<FaStar color="yellow" size="1.5em" />);
    }
  }

  return (
    <div className=" Review-div">
      {objects.map((object, i) => (
        <div className="star" key={i}>
          {object}
        </div>
      ))}
    </div>
  );
};

export default Review;
