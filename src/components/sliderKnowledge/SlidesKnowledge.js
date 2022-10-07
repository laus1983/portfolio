import React from "react";
import "./SliderKnowledge.css";

const slidesInfo = [
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1665178791/Henry/Henry_Certificate_-_Luis_Urdaneta_njvevb.jpg",
    alt: " Certificado Full Stack Web Developer",
    desc: "Full Stack Web Developer",
  },
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
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1665103827/Certificados%20Dev/LuisUrdaneta-PCAP_Programming-certificate_page-0001_abho6n.jpg",
    alt: "Certificado PCAP Programming Essentials in Python ",
    desc: "PCAP: Programming Essentials in Python",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1665103827/Certificados%20Dev/LuisUrdaneta-Intro-Cibersecur-certificate_page-0001_s538yu.jpg",
    alt: "Certificado Introducción a la Seguridad Cibernética",
    desc: "Introducción a la Seguridad Cibernética",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1665103826/Certificados%20Dev/LuisUrdaneta-Introduction_to_-certificate_page-0001_rdcv73.jpg",
    alt: "Certificado Introducción a IoT",
    desc: "Introducción a IoT",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1665103826/Certificados%20Dev/Certificado_Curso_Programacion_con_JavaScript_page-0001_jcsqtt.jpg",
    alt: "Certificado Programación con JavaScript",
    desc: "Programación con JavaScript",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1665103826/Certificados%20Dev/Certificado_Curso_Desarrollo_de_Servicios_en_la_Nube_page-0001_pm0ya6.jpg",
    alt: "Certificado Desarrollo de Servicios en la Nube",
    desc: "Desarrollo de Servicios en la Nube",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1665103826/Certificados%20Dev/Certificado_Git_y_GitHub_page-0001_xz21vk.jpg",
    alt: "Certificado Git y GitHub",
    desc: "Git y GitHub",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1665103825/Certificados%20Dev/Certificado_Curso_Programacion_con_Java_Standard_page-0001_wbippd.jpg",
    alt: "Certificado Programación con Java Standard",
    desc: "Programación con Java Standard",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1665105714/Certificados%20Dev/Applied_Data_Science_I_azqlus.png",
    alt: "Certificado Applied Data Science I",
    desc: "Applied Data Science I",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1665105714/Certificados%20Dev/Applied_Data_Science_II_opzifj.png",
    alt: "Certificado Applied Data Science II",
    desc: "Applied Data Science II",
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
