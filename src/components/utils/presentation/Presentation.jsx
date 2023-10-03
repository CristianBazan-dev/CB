import React from "react";
import "./presentation.css";

function Presentation(props) {
  return (
    <section className="presentation-section">
      <div className="logo">
        <img src="https://res.cloudinary.com/droyfngct/image/upload/v1696290871/Brand/Web/Logo%20-%20Compreso.png" alt="" />
      </div>
      <div className="title">
        <div className="separator"></div>
        <h1>Desarrollo de software</h1>
      </div>
    </section>
  );
}

export default Presentation;
