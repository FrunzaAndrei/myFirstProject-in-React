/* eslint-disable no-unused-expressions */
import React from "react";
import { Component } from "react";
import Navbar from "./header/navbar";
import HamburgerContain from "./header/hamburger-cotain";
import DisplayBlank from "./header/screen-blank";
import Cartonas from "./cartonas-prod/cartonas";
import "./main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      stoc: [
        {
          id: "1",
          title: "Jucarii",
          imageLink:
            "https://pluspng.com/img-png/lego-birthday-png-lego-club-magazine-party-birthday-toy-lego-900.jpg",
          price: 250,
          star: 3
        },
        {
          id: "2",
          title: "Games",
          imageLink:
            "https://media.contentapi.ea.com/content/dam/eacom/common/ea-hero-md-bg-mashup-trailer-7x2-xl.jpg.adapt.320w.jpg",
          price: 400,
          star: 4
        },
        {
          id: "3",
          title: "Tools",
          imageLink:
            "https://www.kstools.com/media/image/76/fe/6b/FOT_GES_ALG_917-0797-GB_SALL_AING_V15c91d4e3dd32e_600x600@2x.jpg",
          price: 1400,
          star: 2
        },
        {
          id: "4",
          title: "Little Yoga",
          imageLink:
            "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1231047442892",
          price: 140,
          star: 4
        },
        {
          id: "5",
          title: "Pikachu",
          imageLink:
            "https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw3f37c9ec/images/E90E2135_1.jpg?sw=767&sh=767&sm=fit",
          price: 100,
          star: 5
        }
      ]
    };
  }

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

  render() {
    return (
      <div className="main">
        <Navbar displayMenuH={this.displayMenuHam} />
        <HamburgerContain displayItem={this.state.display} />
        <DisplayBlank
          displayItem={this.state.display}
          displayMenu={this.displayMenuHam}
        />
        <div className="continut">
          {this.state.stoc.map(stk => (
            <Cartonas class="cart" stoc={stk} key={stk.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
