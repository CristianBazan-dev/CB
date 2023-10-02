import React from "react";
import "./header.css";
import { Link } from "react-router-dom";


import Logo from "../../assets/logo/Logo.png";

function Header(props) {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <nav>
        <ul>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/services">
            <li>Servicios</li>
          </Link>
          <Link to="/about">
            <li>Acerca de</li>
          </Link>
          <Link to="/contact">
            <li>Contacto</li>
          </Link>
        </ul>
      </nav>


      {/* <Link to="" target="_blank" className="whatsapp-icon-container">
        <Whatsapp />
      </Link> */}
    </header>
  );
}

export default Header;
