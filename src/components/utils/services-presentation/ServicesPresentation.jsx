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
            alt=""
          />
        </div>
      </div>

      <div className="second-row">
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
              src="https://res.cloudinary.com/droyfngct/image/upload/v1696474308/Brand/Web/Banners/8_f3d53t.png"
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
            src="https://res.cloudinary.com/droyfngct/image/upload/v1696534997/Brand/Web/Banners/mobile_esdbei.png"
            alt=""
          />
        </div>
      </div>

      <div className="service">
        <div className="info">
          <div className="title">
            <h2>Marketing</h2>
            <h2>Marketing digital</h2>
            <h2>Branding</h2>
            <h1>Identidad</h1>
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
      </div>
    </section>
  );
}

export default ServicesPresentation;
