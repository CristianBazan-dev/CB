import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { services } from "../../../api/Services";
import ServiceCard from "../../../components/utils/service-card/ServiceCard";

import "./services.css";

function Services(props) {
  return (
    <article className="app">
      <Header />

      <main>
        <div className="grid-container">
          {services.map((service, index) => {
            return (
              <ServiceCard
                key={index}
                service={service}
                id={service.id}
                title={service.title}
                slogan={service.slogan}
                itemImg={service.itemImg}
              />
            );
          })}
        </div>
      </main>

      <Footer />
    </article>
  );
}

export default Services;
