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
