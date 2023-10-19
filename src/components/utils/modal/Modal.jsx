import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import "./modal.css";

function Modal(props) {
  const state = useContext(GlobalState);
  const [showModal, setShowModal] = state.showModal;
  const [modalImg, setModalImg] = state.modalImg;

  return (
    <div
      className={showModal ? "modal-container active" : "modal-container"}
      onClick={() => {
        setShowModal(false);
      }}
    >
      <div className="modal">
        <img src={modalImg} alt="" />
      </div>
    </div>
  );
}

export default Modal;
