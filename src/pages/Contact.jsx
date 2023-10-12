import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import ContactPresentation from "../components/utils/contact-presentation/ContactPresentation";

function Contact(props) {
  return (
    <article className="app">
      <Header />

      <main>
        <ContactPresentation />
      </main>

      <Footer />
    </article>
  );
}

export default Contact;
