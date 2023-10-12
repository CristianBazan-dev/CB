import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";

function ServiceCard({ service, id, title, slogan, itemImg }) {
  const state = useContext(GlobalState);
  const [serviceSelected, setServiceSelected] =
    state.serviceSelected;


  return (
    <Link
      to={`/services/${id}`}
      onClick={() => {
        setServiceSelected(service);
      }}
    >
      <div className="item">
        <div className="title">
          <h2>{title}</h2>
          <h3>{slogan}</h3>
        </div>

        <img
          src={itemImg}
          alt={`Imagen correspondiente al servicio de ${title} de CB`}
        />
      </div>
    </Link>
  );
}

export default ServiceCard;
