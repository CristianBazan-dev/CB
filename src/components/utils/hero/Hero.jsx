import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <div className="hero">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/droyfngct/image/upload/v1696991998/Brand/Web/Logo_-_Light_ow2ugs.png"
          alt=""
        />
      </div>

      <div className="description">
        <h1>Desarrollo</h1>
        <p>
          Transforme y materialice sus ideas ingresando al mundo digital a
          través del reflejo de su misión.
        </p>

        <div className="buttons">
          <Link to="/services">
            <button>Servicios</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
