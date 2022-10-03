import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Contacto</h1>
        <p>Based in Your City</p>
      </div>
      <div className="footer-contact">
        <div className="container-form">
        <form action="#" autoComplete="off">
          <input type="text" name="nombre" placeholder="Ingresa tu nombre"></input>
          <input type="email" name="email" placeholder="Ingresa tu correo" class="campo"></input>
          <textarea name="mensaje"placeholder="Ingresa tu mensaje"></textarea>
          <input type="submit" name="enviar"
          value="enviar mensaje"class="btn-enviar"></input>
        </form>
       </div>
      </div>
      <div className="footer-sns">
        <div className="design-by"></div>
        <div className="sns-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;