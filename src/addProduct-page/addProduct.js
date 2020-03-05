import "./addProduct.css";
import Auth from "./auth";
import React, { Component } from "react";

class AddProduct extends Component {
  render() {
    return (
      <div>
        <h1>This will be Contact page</h1>
        <Auth emailAd={this.props.emailAdmin} passwordAd={this.props.passwordAdmin}/>
      </div>
    );
  }
}

export default AddProduct;
