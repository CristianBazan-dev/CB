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
        <h1>Desarrollo & Consultoría</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          facilis voluptate deserunt recusandae libero obcaecati quam laboriosam
          repellendus! Alias maiores facere earum nesciunt voluptas cumque
          dolorum rerum nemo unde ad.
        </p>

        <div className="buttons">
          <Link to="/services">
            <button>Servicios</button>
          </Link>

          <button to="/about">Conocer CB</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
