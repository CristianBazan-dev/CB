<<<<<<< HEAD
import React, { createContext } from "react";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const state = {};

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
=======
import React, { createContext } from "react";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const state = {};

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
>>>>>>> 33e23e6fec986364e78a1762dda785d5ad147cd8
