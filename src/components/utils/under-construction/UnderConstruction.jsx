import React from "react";
import Graph from "../../../assets/img/utils/UnderConstruction.svg?react";
import "./underConstruction.css";
import { Link } from "react-router-dom";

function UnderConstruction(props) {
  return (
    <section className="under-construction-section">
      <Graph className="under-construction" />

      <div className="text">
      <h2>Seccion en construcción</h2>

<h3>
  Para obtener más información no dude en consultar haciendo click{" "}
  <Link to="https://wa.link/kprtcf" target="_blank">
    {" "}
    aquí.
  </Link>
</h3>
      </div>
      
    </section>
  );
}

export default UnderConstruction;
