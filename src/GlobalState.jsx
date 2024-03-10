import { createContext, useState } from "react";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [serviceSelected, setServiceSelected] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const [modalImg, setModalImg] = useState(""); 

  // console.log(serviceSelected);
  const state = {
    serviceSelected: [serviceSelected, setServiceSelected],
    showModal: [showModal, setShowModal],
    modalImg: [modalImg, setModalImg], 
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
