import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./service.css";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import ServicePresentation from "../../../components/utils/service-presentation/ServicePresentation";
import ServiceSelection from "../../../components/utils/service-selection/ServiceSelection";
import { GlobalState } from "../../../GlobalState";
import { services } from "../../../api/Services";
import Modal from "../../../components/utils/modal/Modal";
import axios from "axios"


function Service(props) {
  const page = useParams();
  const state = useContext(GlobalState);


  const [serviceSelected, setServiceSelected] = state.serviceSelected;

  const params = useParams()

  const getService = () => {
    const res = axios.get("./services.json").then((res) => {
      // console.log(res)
      res.data.map((service) => {
        if (service.id == params.id) {
          setServiceSelected(service);
        }
      });
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
   getService()
  }, []);

  return (
    <article className="app">
      <Header />

      <main>
        <div className="service-page">
          <ServiceSelection />
          <Modal/>
          <ServicePresentation />
        </div>
      </main>

      <Footer />
    </article>
  );
}

export default Service;
