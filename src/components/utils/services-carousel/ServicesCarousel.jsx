import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./servicesCarousel.css";
import { services } from "../../../api/Services";
import { Link } from "react-router-dom";

function ServicesCarousel(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="services-carousel-section">
      <Slider {...settings}>
        {services.map((service) => {
          return (
            <Link to={`/services/${service.id}`} className="service-card" style="display: 'unset'">
                <div className="text">
                <h3>{service.title}</h3>
              <h4>{service.slogan}</h4>
              <p>{service.description}</p>
                </div>
            
              <img src={service.itemImg} alt="" />
            </Link>
          );
        })}
      </Slider>
    </section>
  );
}

export default ServicesCarousel;
