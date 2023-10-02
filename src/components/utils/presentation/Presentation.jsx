import React from "react";
import "./presentation.css";

import Logo from "../../../assets/logo/Logo.png";

function Presentation(props) {
  return (
    <section className="presentation-section">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="title">
        <div className="separator"></div>
        <h1>Desarrollo de software</h1>
      </div>
    </section>
  );
}

export default Presentation;
