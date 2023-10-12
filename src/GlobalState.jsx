import { createContext, useState } from "react";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [serviceSelected, setServiceSelected] = useState([]);

  console.log(serviceSelected);
  const state = {
    serviceSelected: [serviceSelected, setServiceSelected],
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
