import React, { useRef } from "react";
import "./contactPresentation.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast"; 

function ContactPresentation(props) {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID ,
        form.current,
        import.meta.env.VITE_EMAIL_USER_ID
      )
      .then(
        (result) => {
          if ((result.status = 200)) {
            toast.success("E-mail enviado. ¡Gracias por contactarse!");
          }
        },
        (error) => {
          toast.error(
            "Hubo un error al enviar el e-mail. Espere un momento o contactese mediante teléfono. ¡Gracias por su paciencia!"
          );
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-presentation-section">


      {/* <div className="title">
        <h1>Contacto</h1>
      </div> */}

      <div className="row">
        <div className="subtitle">
          <h2>Envíe un mail sobre su consulta</h2>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Nombre completo" name="user_name" required/>
          <input type="email" placeholder="E-mail" name="user_email" required/>
          <input type="text" placeholder="Asunto" name="user_subject" required/>
          <textarea placeholder="Escriba su mensaje..." name="message"required />
          <div class="g-recaptcha" data-sitekey="6LdO65QpAAAAAGsNLZFB6qiZlLjsyB_jIIvnQrvK"></div>

          <button>Enviar</button>
        </form>
      </div>

      <div className="row">
        <div className="subtitle">
          <h2>O comuniquese directamente a través del teléfono</h2>
        </div>

        <div className="phone">
          <h2>+54 9 3467 445119</h2>
          <button>Contactar</button>
        </div>
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
    </section>
  );
}

export default ContactPresentation;
