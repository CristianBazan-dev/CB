import React, { useContext } from "react";
import "./servicesPresentation.css";
import { GlobalState } from "../../../GlobalState";
import { services } from "../../../api/Services";

import Service from "../service/Service";

function ServicesPresentation(props) {
  const state = useContext(GlobalState);
  console.log(services);
  return (
    <section className="services-presentation-section">
      {/* <div className="service">
        <div className="info">
          <div className="title">
            <h2>Páginas web</h2>
          </div>
          <div className="description">
            <h3>Figure en la web. Figure en el mundo.</h3>
            <p>
              Estar en la web es llegar a cualquiers parte utilizando el click
              como medio de transporte.
            </p>
            <button>See more</button>
          </div>
        </div>

        <div className="item">
          <img
            src="https://res.cloudinary.com/droyfngct/image/upload/v1696387013/Brand/Web/Banners/Notebook_-_web_ulgus9.png"
            alt=""
          />
        </div>
      </div> */}

      {services.map((service) => {
        return (
          <Service
            title={service.title}
            slogan={service.slogan}
            description={service.description}
            img={service.itemImg}
          />
        );
      })}
    </section>
  );
}

export default ServicesPresentation;
