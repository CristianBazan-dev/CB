import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Presentation from "../components/utils/presentation/Presentation";
import ServicesPresentation from "../components/utils/services-presentation/ServicesPresentation";

function Home(props) {
  return (
    <article className="app">
      <Header />

      <main>
        <Presentation />
        <ServicesPresentation />
      </main>

      <Footer />
    </article>
  );
}

export default Home;
