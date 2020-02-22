import React, { Component } from "react";
import "./cartonas-style.css";
import Images from "./imag-cart";
import TitleCart from "./title-cart";
import Price from "./price";
import Review from "./review";
import ButtonAdd from "./button";

class Cartonas extends Component {
  render() {
    console.log(this.props.stoc);
    return (
      <div className="cartonas">
        <Images imgLink={this.props.stoc.imageLink}/>
        <TitleCart title={this.props.stoc.title}/>
        <Price price={this.props.stoc.price}/>
        <Review numberStars={this.props.stoc.star}/>
        <ButtonAdd />
      </div>
    );
  }
}

export default Cartonas;
