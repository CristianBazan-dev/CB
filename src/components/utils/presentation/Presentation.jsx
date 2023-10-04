import React from "react";
import "./presentation.css";
import Hero from "../hero/Hero";

function Presentation(props) {
  return (
    <section className="presentation-section">
      {/* <div className="logo">
        <img
          src="https://res.cloudinary.com/droyfngct/image/upload/v1696290871/Brand/Web/Logo%20-%20Compreso.png"
          alt=""
        />
      </div>

      <div className="brand-title">
        <div className="separator"></div>
        <h1>Desarrollo de software</h1>
      </div> */}
      <Hero/>
    </section>
  );
}

export default Presentation;
