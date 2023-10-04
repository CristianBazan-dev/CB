import React, { useContext } from "react";
import "./service.css";

function Service({ id, title, slogan, description, img }) {



  return (
    <div className="service">
      <div className="info">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="description">
          <h3>{slogan}</h3>
          <p>{description}</p>
          <button>See more</button>
        </div>
      </div>

      <div className="item">
        <img src={img} alt={`Imagen de la sección ${title} en la web de CB`} />
      </div>
    </div>
  );
}

export default Service;
