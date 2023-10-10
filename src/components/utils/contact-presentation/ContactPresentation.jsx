import React from "react";
import "./contactPresentation.css";

function ContactPresentation(props) {
  return (
    <section className="contact-presentation-section">
      <div className="title">
        <h1>Contacto</h1>
      </div>

      <div className="row">
        <div className="subtitle">
          <h2>Envíe un mail sobre su consulta</h2>
        </div>
        <form action="">
          
          <input type="text" placeholder="Nombre completo"/>
          <input type="text" />
          <input type="text" />
          <textarea  />

          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPresentation;
