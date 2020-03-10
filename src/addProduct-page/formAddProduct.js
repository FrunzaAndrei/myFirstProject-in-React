import React, { Component } from "react";

class FormAddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productUrlImage: "",
      productName: "",
      productPrice: 0,
      productReview: 0
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.productName !== undefined &&
      this.state.productUrlImage !== undefined &&
      this.state.productPrice !== undefined &&
      this.state.productReview !== undefined
    ) {
      let name = this.state.productName;
      let url = this.state.productUrlImage;
      let price = this.state.productPrice;
      let review = this.state.productReview;
      this.props.addToStoc(url, name, price, review);
    }
  };

  render() {
    return (
      <div className="form-add-product">
        <p className="title-form"> Add Product Form </p>
        <form className="form-add" onSubmit={this.onSubmit}>
          <div>
            <label>Add URL Image :</label>
            <input
              type="text"
              name="productUrlImage"
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Product Name :</label>
            <input type="text" name="productName" onChange={this.onChange} />
          </div>
          <div>
            <label>Product Price :</label>
            <input
              type="number"
              name="productPrice"
              defaultValue="0"
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Product Review :</label>
            <input
              type="number"
              name="productReview"
              min="0"
              max="5"
              defaultValue="0"
              onChange={this.onChange}
            />
          </div>
          <div>
            <button type="submit" className="btnAddProduct">
              Add Product
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormAddProduct;
