import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer>
      <div className="logo">
        <img
          src="https://res.cloudinary.com/droyfngct/image/upload/v1696290871/Brand/Web/Logo%20-%20Compreso.png"
          alt=""
        />
        <p>| Desarrollo de Software & Consultoría digital</p>
      </div>

      <div className="sections">
        <div className="section">
          <Link to="/services">
            <p className="section-title">Servicios</p>
          </Link>

          <Link to="">
            <p>Páginas web</p>
          </Link>

          <Link to="">
            <p>E-commerce</p>
          </Link>

          <Link to="">
            <p>Aplicaciones de gestión</p>
          </Link>

          <Link to="">
            <p>Aplicaciones de escritorio</p>
          </Link>

          <Link to="">
            <p>Aplicaciones móviles</p>
          </Link>

          <Link to="">
            <p>Identidad</p>
          </Link>
        </div>

        <div className="section">
          <Link to="/about">
            <p className="section-title">Acerca de</p>
          </Link>
        </div>

        <div className="section">
          <Link to="/about">
            <p className="section-title">Contacto</p>
          </Link>

          <Link to="">
            <p>cristianbazandev@gmail.com</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
