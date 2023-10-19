import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function About(props) {
  return (

    <article className="app">
    <Header />

    <main>
      <h3>Actualmente, está página está actualizandose para poder reflejar nuestra misión de la mejor manera posible.</h3>
      <h4>En caso de querer saber más, comuniquese al <Link to="https://api.whatsapp.com/send?phone=543467445119&text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20de%20CB%20con%20la%20siguiente%20consulta...">+54 9 3467 445119</Link></h4>
      <h1>Sobre CB</h1>

        
      
   
    </main>

    <Footer />
  </article>



  );
}

export default About;
