import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./SlidesKnowledge";
import "./SliderKnowledge.css";

const SliderKnowledge = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Mis Conocimientos</h2>
      </div>

      <Carousel
        arrows
        slidesPerPage={3}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: 250,
          },
        }}
      />
    </div>
  );
};

export default SliderKnowledge;
