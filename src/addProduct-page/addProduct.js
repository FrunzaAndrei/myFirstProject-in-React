import "./addProduct.css";
import Auth from "./auth";
import React, { Component } from "react";

class AddProduct extends Component {
  render() {
    return (
      <div>
        {this.props.conditionDisplay === false && (
          <h1>This will be Contact page</h1>
        )}
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
