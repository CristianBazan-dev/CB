import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";

import Whatsapp from "../../assets/icons/social/wpp.svg?react";

function Header(props) {
  return (
    <header>
      <div className="logo">
        <img
          src="https://res.cloudinary.com/droyfngct/image/upload/v1696290871/Brand/Web/Logo%20-%20Compreso.png"
          alt=""
        />
      </div>

      {/* <img src={Whatsapp} alt="" className="whatsapp-logo"/> */}

      <Link
        to="https://wa.link/kprtcf"
        target="_blank"
        className="whatsapp-icon-container"
      >
        <Whatsapp />

        <div className="deploy-msg-wpp">
          <p>Contáctenos a través de Whatsapp</p>
        </div>
      </Link>

      <nav id="nav">
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
