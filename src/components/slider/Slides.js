import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1664221260/Portfolio_Images/Imagen_PI_bwviev.png",
    alt: "Project 1",
    desc: "Project 1",
    title: "Project 1",
    href: "https://luisurdaneta-pi.netlify.app/",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1664221258/Portfolio_Images/Imagen_PF_xuzzvv.jpg",
    alt: "Project 2",
    desc: "Project 2",
    title: "Project 2",
    href: "https://estudioda.ar/cinema/",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a
      title={slide.title}
      href={slide.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="slide-image" src={slide.src} alt={slide.alt} />
    </a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
