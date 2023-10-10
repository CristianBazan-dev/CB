import React from "react";
import "./hero.css";

function Hero(props) {
  return (
    <div className="hero">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/droyfngct/image/upload/v1696290871/Brand/Web/Logo%20-%20Compreso.png"
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
          <button>Servicios</button>
          <button>Conocer CB</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
