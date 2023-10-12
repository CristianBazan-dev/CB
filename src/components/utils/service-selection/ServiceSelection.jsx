import React, { useContext } from "react";
import "./serviceSelection.css";

import { services } from "../../../api/Services";
import { GlobalState } from "../../../GlobalState";
import { Link } from "react-router-dom";

function ServiceSelection(props) {
  const state = useContext(GlobalState);

  const [serviceSelected, setServiceSelected] = state.serviceSelected;
  return (
    <div className="service-selection-menu">


      {services.map((service) => {
        return (
          <Link
          className={serviceSelected.id == service.id ? "service-menu-item active" : "service-menu-item"}
            to={`/services/${service.id}`}
            onClick={() => {
              setServiceSelected(service);
            }}
          >
            <p>{service.title}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ServiceSelection;
