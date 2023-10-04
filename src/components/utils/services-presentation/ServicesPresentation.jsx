import React from "react";
import "./servicesPresentation.css";

function ServicesPresentation(props) {
  return (
    <section className="services-presentation-section">
      <div className="service first">


        <div className="info">
          <div className="title">
            <h2>Páginas web</h2>
          </div>
          <div className="description">
            <h3>Figure en la web. Figure en el mundo.</h3>
            <p>
              Estar en la web es llegar a cualquier parte utilizando el click
              como medio de transporte.
            </p>
            <button>See more</button>
          </div>
        </div>

        <div className="item">
        <img
          src="https://res.cloudinary.com/droyfngct/image/upload/v1696387013/Brand/Web/Banners/Notebook_-_web_ulgus9.png"
          alt=""
        />
        </div>
 
      </div>
    </section>
  );
}

export default ServicesPresentation;
