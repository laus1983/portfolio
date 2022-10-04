import React from "react";
import "./SliderKnowledge.css";

const slidesInfo = [
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1664222868/Certificados%20Platzi/diploma-redux_nzeuhw.jpg",
    alt: " Certificado Redux",
    desc: "Redux",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1664222867/Certificados%20Platzi/diploma-backend-nodejs-postgres_mdrukl.jpg",
    alt: "Certificado Backend NodeJS",
    desc: "Backend NodeJS PostgreSQL",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1664222865/Certificados%20Platzi/diploma-backend-nodejs_kgqbvh.jpg",
    alt: "Certificado Backend NodeJS ExpressJS",
    desc: "Backend NodeJS ExpressJS",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1664222866/Certificados%20Platzi/diploma-react-router-redux_sbwri3.jpg",
    alt: "Certificado React Router Redux",
    desc: "React Router Redux",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1664222865/Certificados%20Platzi/diploma-react_npivn6.jpg",
    alt: "Certificado React",
    desc: "React",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1664222865/Certificados%20Platzi/diploma-estructuras-datos_u6fffo.jpg",
    alt: "Certificado Estructuras de Datos",
    desc: "Estructuras de Datos JS",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1664222865/Certificados%20Platzi/diploma-javascript-closures-scope_diyfry.jpg",
    alt: "Certificado Javascript Closures Scope",
    desc: "Javascript Closures Scope",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1664840747/Freecodecamp/Certificado_Responsive_Web_Desing_page-0001_ruthoy.jpg",
    alt: "Certificado Responsive Web Design",
    desc: "Responsive Web Design",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1664840782/EF%20SET/EF_SET_Certificate_page-0001_memrzy.jpg",
    alt: "Certificado EF SET",
    desc: "Nivel B1 Inglés",
  },
];

const SlidesKnowledge = slidesInfo.map((slide) => (
  <div className="slideKnowledge-container">
    <img className="slideKnowledge-image" src={slide.src} alt={slide.alt} />
    <div className="slideKnowledge-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default SlidesKnowledge;
