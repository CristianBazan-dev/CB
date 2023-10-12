import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import ServicePresentation from "../../../components/utils/service-presentation/ServicePresentation";
import ServiceSelection from "../../../components/utils/service-selection/ServiceSelection";
import { GlobalState } from "../../../GlobalState";

function Service(props) {
  const page = useParams();
  const state = useContext(GlobalState); 

  const [serviceSelected, setServiceSelected] = state.serviceSelected


  useEffect(() => {
    if(serviceSelected.id != page.id){
      alert("Distinto")
    }
    
  }, [])


  return (
    <article className="app">
      <Header />

      <main>
        <ServiceSelection />

        <h1>{serviceSelected.title}</h1>

        <ServicePresentation />
      </main>

      <Footer />
    </article>
  );
}

export default Service;
