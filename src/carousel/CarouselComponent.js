import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = props => {
  return (
    <div class="carousel-wrapper">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        axis="horizontal"
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src="../img-01.jpg" />
        </div>
        <div>
          <img src="../img-02.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
