import React, { useContext, useState } from "react";
import "./serviceCarousel.css";
import { GlobalState } from "../../../GlobalState";

function ServiceCarousel(props) {
  const state = useContext(GlobalState);

  const [serviceSelected, setServiceSelected] = state.serviceSelected;

  const [showModal, setShowModal] = state.showModal; 
  const [modalImg, setModalImg] = state.modalImg; 
  const [imgActive, setImgActive] = useState(1);



  return (
    <div className="service-carousel">
      {/* {serviceSelected.exampleImgs.map((sampleImgs, index) => {
        return (
          <div
            className={
              index == imgActive ? "carousel-item active" : "carousel-item"
            }
            onMouseEnter={() => {
              setImgActive(index);
            }}
            onClick={() => {
              setShowModal(true)
              setModalImg(sampleImgs)
            }}
          >
            <img src={sampleImgs} alt="" />
          </div>
        );
      })} */}
    </div>
  );
}

export default ServiceCarousel;
