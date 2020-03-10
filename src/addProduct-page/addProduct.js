import "./addProduct.css";
import Auth from "./auth";
import React, { Component } from "react";
import FormAddProduct from "./formAddProduct";

class AddProduct extends Component {
  render() {
    return (
      <div>
        {this.props.conditionDisplay === false && <FormAddProduct addToStoc={this.props.addToStoc} />}
        {this.props.conditionDisplay === true && (
          <Auth
            emailAd={this.props.emailAdmin}
            passwordAd={this.props.passwordAdmin}
            displayPanel={this.props.displayPanelAdd}
          />
        )}
      </div>
    );
  }
}

export default AddProduct;
