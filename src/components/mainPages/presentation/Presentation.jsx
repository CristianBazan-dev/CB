<<<<<<< HEAD
import React from "react";
import "./presentation.css";

import Model from "../../utils/Model/Model";
import ExampleModel from "../../utils/ExampleModel/ExampleModel";
import Logo from "../../../assets/logo/logo.png"

function Presentation(props) {
  return (
    <section className="presentation-section">
      {/* <Model /> */}
      {/* <ExampleModel/>  */}

      <img src={Logo} alt="" />

      <div class="separator"></div>
      <h2 class="subtitle">Desarrollo de Software</h2> 
    </section>
  )
}

export default Presentation;
=======
import React from "react";
import "./presentation.css";

import Model from "../../utils/Model/Model";
import ExampleModel from "../../utils/ExampleModel/ExampleModel";

function Presentation(props) {
  return (
    <section className="presentation-section">
      {/* <Model /> */}
      {/* <ExampleModel/>  */}

       <h1 class="title">CB</h1>
      <div class="separator"></div>
      <h2 class="subtitle">Desarrollo de Software</h2> 
    </section>
  )
}

export default Presentation;
>>>>>>> 33e23e6fec986364e78a1762dda785d5ad147cd8
