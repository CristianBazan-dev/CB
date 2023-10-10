import React from "react";
import "./aboutPresentation.css";

function AboutPresentation(props) {
  return (
    <section className="about-presentation-section">
      <div className="first-row">
        <div className="title">
          <h1>Sobre CB</h1>
        </div>
        <img
          src="https://res.cloudinary.com/droyfngct/image/upload/v1696957795/Brand/Web/Banners/Torn_Posters_emakvr.png"
          alt=""
        />
      </div>

      <p>
        Manejando una mirada con respecto al desarrollo entendido como una
        cuestión holística para propender al crecimiento continuo.
      </p>

      <button>Conocer CB</button>
    </section>
  );
}

export default AboutPresentation;
