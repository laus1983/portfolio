import React from "react";
import "./SliderKnowledge.css";

const slidesInfo = [
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1665178791/Henry/Henry_Certificate_-_Luis_Urdaneta_njvevb.jpg",
    alt: " Certificado Full Stack Web Developer",
    desc: "Full Stack Web Developer",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1669333509/Certificados%20Platzi/diploma-docker_page-0001_lkxhxg.jpg",
    alt: " Certificado Docker",
    desc: "Docker",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1671143972/Certificados%20Platzi/diploma-react-native_page-0001_yvmxtv.jpg",
    alt: " Certificado React Native",
    desc: "Introducción A React Native",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1671143932/Certificados%20Platzi/diploma-react-native-listas-apis_page-0001_xqxxe1.jpg",
    alt: " Certificado React Native Listas y APIs",
    desc: "React Native Listas y APIs",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1673307772/Certificados%20Platzi/diploma-react-native-formularios-almacenamiento_page-0001_it3aum.jpg",
    alt: " Certificado React Native Formularios y Almacenamiento",
    desc: "React Native Formularios y Almacenamiento",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1673307745/Certificados%20Platzi/diploma-react-native-cli_page-0001_bzxipr.jpg",
    alt: " Certificado React Native CLI",
    desc: "React Native CLI",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1673565098/Certificados%20Platzi/diploma-typescript_page-0001_tokt4o.jpg",
    alt: " Certificado Typescript",
    desc: "Fundamentos de Typescript",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1674230206/Certificados%20Platzi/diploma-typescript-tipos-avanzados_page-0001_xrsrg7.jpg",
    alt: " Certificado Typescript Tipos Avanzados",
    desc: "Typescript Tipos Avanzados y Funciones",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1674851648/Certificados%20Platzi/diploma-typescript-poo_page-0001_xvd236.jpg",
    alt: " Certificado Typescript POO",
    desc: "Typescript POO",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1673307816/Certificados%20Platzi/diploma-arrays_page-0001_ik2alt.jpg",
    alt: " Certificado Manipulación de Arrays",
    desc: "Manipulación de Arrays",
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
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1666307657/Certificados%20Dev/Certificado_TensorFlow_Udemy_pyhxht.jpg",
    alt: "Certificado TensorFlow para Deep Learning y Python",
    desc: "TensorFlow para Deep Learning y Python",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1666307656/Certificados%20Dev/Certificado_Machine_Learning_Udemy_nojpjq.jpg",
    alt: "Certificado Curso Básico de Machine Learning",
    desc: "Curso Básico de Machine Learning",
  },
  {
    src: "https://res.cloudinary.com/dzoshddvt/image/upload/v1666307656/Certificados%20Dev/Certificado_Python_Udemy_jc9ih6.jpg",
    alt: "Certificado Curso de Python",
    desc: "Curso de Python",
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
