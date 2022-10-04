import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Luis Urdaneta</h1>
        <p>Establecido en Venezuela</p>
      </div>
      <div className="footer-contact">
        <h3>Contáctame</h3>
        {/* <p>Y trabajemos juntos</p> */}
      </div>
      <div className="footer-sns">
        <div className="design-by">Diseñado por Luis Urdaneta</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/luis-alberto-urdaneta-salazar-3b6a4a76/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com/luisurdaneta83" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://github.com/laus1983" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
