import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Déjame decirte algo sobre mí</h3>
        <p>
        Soy un Full Stack Developer con experiencia en el uso de HTML, CSS, JavaScript, Node JS, React JS, Express JS, Redux, React Router, Python, PostgreSQL, entre otras tecnologías del sector. Además soy ingeniero industrial mención procesos con experiencia en diseño y optimización de procesos, seguridad industrial e higiene ocupacional y poseo conocimientos en Data Science con uso de SQL, Python, entre otras tecnologías. Con pensamiento creativo, liderazgo, trabajo en equipo, comunicación, autonomía, enfocado a la solución de problemas de forma analítica y uso racional de recursos.
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://res.cloudinary.com/dzoshddvt/image/upload/v1664839218/Portfolio_Images/IMG-20220216-WA0016_ajzofv.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
