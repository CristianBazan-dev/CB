import React, { useContext } from "react";
import "./servicesPresentation.css";
import { GlobalState } from "../../../GlobalState";
import { services } from "../../../api/Services";



function ServicesPresentation(props) {
  const state = useContext(GlobalState);

  return (
    <section className="services-presentation-section">
      <div className="service">
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
            alt="Ejemplo de las landing pages en CB"
          />
        </div>
      </div>

 
        <div className="service">
          <div className="info">
            <div className="title">
              <h2>E-commerce</h2>
            </div>
            <div className="description">
              <h3>Su nueva casa matriz. Su norte en el comercio.</h3>
              <p>
                Promocione y venda sus productos ingresando en la competencia
                globalizada.
              </p>
              <button>See more</button>
            </div>
          </div>

          <div className="item">
            <img
              src="https://res.cloudinary.com/droyfngct/image/upload/v1696693468/Brand/Web/Banners/E-commerce_lurthc.png"
              alt=""
            />
          </div>
        </div>



      <div className="service">
          <div className="info">
            <div className="title">
              <h2>Aplicaciones de gestión</h2>
            </div>
            <div className="description">
              <h3>Organice. Estructure.</h3>
              <p>
                Proyecte el futuro de su empresa agilizando los procesos típicos
                de su entorno.
              </p>
              <button>See more</button>
            </div>
          </div>

          <div className="item">
            <img
              src="https://res.cloudinary.com/droyfngct/image/upload/v1696525787/Brand/Web/Banners/Surface_Laptop_Studio_zlnvsl.png"
              alt=""
            />
          </div>
        </div>  

      <div className="service">
        <div className="info">
          <div className="title">
            <h2>Aplicaciones de escritorio</h2>
          </div>
          <div className="description">
            <h3>Proyecte. Distingase.</h3>
            <p>Traiga a la realidad material aquella idea abstracta.</p>
            <button>See more</button>
          </div>
        </div>

        <div className="item">
          <img
            src="https://res.cloudinary.com/droyfngct/image/upload/v1696534437/Brand/Web/Banners/Group_5_cfjutv.png"
            alt=""
          />
        </div>
      </div>

      <div className="service">
        <div className="info">
          <div className="title">
            <h2>Aplicaciones móviles</h2>
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
            src="https://res.cloudinary.com/droyfngct/image/upload/v1696692766/Brand/Web/Banners/Mobile_App_j8oghv.png"
            alt=""
          />
        </div>
      </div>

      <div className="service">
        <div className="info">
          <div className="title">
            <div className="canceled">
              <h4>Marketing</h4>
              <h4>Marketing digital</h4>
              <h4>Branding</h4>
            </div>

            <h1>Identidad</h1>
          </div>
          <div className="description">
            <h3>La distinción de su marca.</h3>
            <p>Represente su misión en todos los estadios de su desempeño.</p>
            <button>See more</button>
          </div>
        </div>

        <div className="item">
          {/* <img
            src="https://res.cloudinary.com/droyfngct/image/upload/v1696957791/Brand/Web/Banners/Business_Card_ltru6m.png"
            alt=""
          /> */}
        </div>
      </div>
    </section>
  );
}

export default ServicesPresentation;
