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
import About from "./about-page/about";
import Contact from "./contact-page/contact";
import { Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      stoc: stoc,
      demands: [],
      screen: "Home"
    };
  }

  navigate = namePage => {
    this.setState({
      screen: namePage
    });
  };

  addToCart = buy => {
    this.setState(prevState => ({
      demands: [...prevState.demands, buy]
    }));
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

    return finalPrice;
  };

  numberOfItemsPurchased = () => {
    return this.state.demands.length;
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
          path="/about"
          render={() => (
            <div>
              <About />
            </div>
          )}
        />

        <Route
          path="/contact"
          render={() => (
            <div>
              <Contact />
            </div>
          )}
        />
      </div>
    );
  }
}

export default Main;
