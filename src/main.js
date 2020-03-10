/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from "react";
import { Component } from "react";
import Navbar from "./header/navbar";
import HamburgerContain from "./header/hamburger-cotain";
import DisplayBlank from "./header/screen-blank";
import Cartonas from "./cartonas-prod/cartonas";
import CarouselComponent from "./carousel/CarouselComponent";
import "./main.css";
import stoc from "./stoc";
import { Route, withRouter } from "react-router-dom";
import YourCart from "./your-cart/yourCart";
import AddProduct from "./addProduct-page/addProduct";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      stoc: stoc,
      demands: [],
      screen: "Home",
      displayReceipt: false,
      emailAdmin: "admin@admin.com",
      passwordAdmin: "admin",
      displayAskAdmin: true
    };
  }

  navigate = namePage => {
    this.setState({
      screen: namePage
    });
  };

  addToCart = buy => {
    this.setState(prevState => ({
      demands: [...prevState.demands, buy],
      displayReceipt: true
    }));
  };

  displayAdminPanel = () => {
    this.setState({
      displayAskAdmin: false
    });
  };

  displayMenuHam = () => {
    if (this.state.display === false) {
      this.setState({
        display: true
      });
    } else if (this.state.display === true) {
      this.setState({
        display: false
      });
    }
  };

  totalPrice = () => {
    let finalPrice = 0;
    this.state.demands.map(item => {
      finalPrice += item.price;
    });
    this.forRenderFinalReceipt();

    return finalPrice;
  };

  numberOfItemsPurchased = () => {
    return this.state.demands.length;
  };

  forRenderFinalReceipt() {
    this.state.stoc.map(demand => (demand.itemSold = 0));
    this.state.demands.map(demand => {
      for (let i = 0; i < this.state.stoc.length; i++) {
        if (this.state.stoc[i].id === demand.id) {
          this.state.stoc[i].itemSold++;
        }
      }
    });
  }

  addToStoc = (urlImg, titleP, priceP, reviewP) => {
    let addProduct = {
      id: this.state.stoc.length + 1,
      title: titleP,
      imageLink: urlImg,
      price: parseInt(priceP),
      star: reviewP
    };
    this.setState({
      stoc: [...this.state.stoc, addProduct]
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="main">
        <Navbar
          displayMenuH={this.displayMenuHam}
          navig={this.navigate}
          itemPurchased={this.numberOfItemsPurchased}
          totalPrice={this.totalPrice}
        />
        <HamburgerContain
          displayItem={this.state.display}
          navig={this.navigate}
        />
        <DisplayBlank
          displayItem={this.state.display}
          displayMenu={this.displayMenuHam}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div>
              <div className="carousel">
                <CarouselComponent />
              </div>
              <div className="continut">
                {this.state.stoc.map(stk => (
                  <Cartonas
                    class="cart"
                    stoc={stk}
                    key={stk.id}
                    addToBag={this.addToCart}
                  />
                ))}
              </div>
            </div>
          )}
        />

        <Route
          path="/your-cart"
          render={() => (
            <div>
              <YourCart
                items={this.state.stoc}
                condition={this.state.displayReceipt}
                finalPrice={this.totalPrice()}
              />
            </div>
          )}
        />

        <Route
          path="/add-product"
          render={() => (
            <div>
              <AddProduct
                emailAdmin={this.state.emailAdmin}
                passwordAdmin={this.state.passwordAdmin}
                conditionDisplay={this.state.displayAskAdmin}
                displayPanelAdd={this.displayAdminPanel}
                addToStoc={this.addToStoc}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default withRouter(Main);
