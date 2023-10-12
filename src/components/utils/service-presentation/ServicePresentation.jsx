import React, { useContext } from "react";
import "./servicePresentation.css";
import { GlobalState } from "../../../GlobalState";
import ServiceCarousel from "../service-carousel/ServiceCarousel";


function ServicePresentation(props) {
  const state = useContext(GlobalState);

  const [serviceSelected, setServiceSelected] = state.serviceSelected;
  return <div>
    
    
    <h2>{serviceSelected.slogan}</h2>

    <ServiceCarousel />
  
  
  
  </div>;
}

export default ServicePresentation;
