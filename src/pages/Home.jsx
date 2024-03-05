import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Presentation from "../components/utils/presentation/Presentation";
import ServicesPresentation from "../components/utils/services-presentation/ServicesPresentation";
import AboutPresentation from "../components/utils/about-presentation/AboutPresentation";
import ContactPresentation from "../components/utils/contact-presentation/ContactPresentation"
import Whatsapp from "../components/utils/whatsapp/Whatsapp";

function Home(props) {
  return (
    <article className="app">
      <Whatsapp/>
      <Header />

      <main>
        <Presentation />
        <ServicesPresentation />
        <AboutPresentation/>
        <ContactPresentation/>
        
      </main>

      <Footer />


    </article>
  );
}

export default Home;
