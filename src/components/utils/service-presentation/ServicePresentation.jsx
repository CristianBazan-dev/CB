import React, { useContext } from "react";
import "./servicePresentation.css";
import { GlobalState } from "../../../GlobalState";s

import ServiceCarousel from "../service-carousel/ServiceCarousel";
import CategoryCard from "../category-card/CategoryCard";
import UnderConstruction from "../under-construction/UnderConstruction"

function ServicePresentation(props) {
  const state = useContext(GlobalState);

  const [serviceSelected, setServiceSelected] = state.serviceSelected;
  console.log(serviceSelected)
  return (
    <section className="service-presentation-section">
      <h1>{serviceSelected.title}</h1>
      <h2>{serviceSelected.slogan}</h2>
      <p>{serviceSelected.description}</p>
      
      {/* <ServiceCarousel /> */}


    <UnderConstruction/>
      


      {/* {serviceSelected.text.map((text) => {
        console.log(text);
        return ( 
          <div className="text">
            <h3>{text.title}</h3>
            {text.p.map((p) => {
              return <p>{p}</p>;
            })}
          </div>
        );
      })} */}

      <div className="categories-cards">
        {/* {serviceSelected.categories.map((serviceCard, index) => {
          return (
            <CategoryCard
              key={index}
              title={serviceCard.title}
              content={serviceCard.content}
              items={serviceCard.items}
              img={serviceCard.icon}
              contact={serviceCard.contact}
            />
          );
        })} */}
      </div>
    </section>
  );
}

export default ServicePresentation;
