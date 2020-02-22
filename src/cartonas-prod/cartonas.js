import React, { Component } from "react";
import "./cartonas-style.css";
import Images from "./imag-cart";
import TitleCart from "./title-cart";
import Price from "./price";
import Review from "./review";
import ButtonAdd from "./button";

class Cartonas extends Component {
  render() {
    
    return (
      <div className="cartonas">
        <Images imgLink={this.props.stoc.imageLink}/>
        <TitleCart title={this.props.stoc.title}/>
        <Price price={this.props.stoc.price}/>
        <Review numberStars={this.props.stoc.star}/>
        <ButtonAdd item={this.props.stoc} buy={this.props.addToBag}/>
      </div>
    );
  }
}

export default Cartonas;
