import React from "react";
import {Link} from "react-router-dom";

const Logo = props => {
  return <Link className="LogoName" to="/"> {props.lgName} </Link>;
};

export default Logo;
