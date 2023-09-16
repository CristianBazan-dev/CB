import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentation from "../mainPages/presentation/Presentation";
import Services from "../mainPages/services/Services";
import About from "../mainPages/about/About";
import Contact from "../mainPages/contact/Contact";
import PresentationAlt from "../utils/presentation-alt/PresentationAlt";

function MainPages(props) {
  return (
    <main>
      <Presentation/>
      {/* <Services/>
      <About/>
      <Contact/> */}
    </main>
  )
}

export default MainPages;
