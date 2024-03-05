import React from "react";
import WhatsappIcon from "../../../assets/icons/social/wpp.svg?react";
import { Link } from "react-router-dom";
import './whatsapp.css'

function Whatsapp(props) {
  return (
    <Link
      to="https://wa.link/kprtcf"
      target="_blank"
      className="whatsapp-icon-container"
    >
      <WhatsappIcon />

      <div className="deploy-msg-wpp">
        <p>Contactese a través de Whatsapp</p>
      </div>
    </Link>
  );
}

export default Whatsapp;
