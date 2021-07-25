/** @format */

import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const mainContext = createContext();

const initialState = {
  gender: "all",
  size: "all",
  price: "low-to-high",
  brand: "all",
};

export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <mainContext.Provider value={{ ...state, dispatch }}>
      {children}
    </mainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(mainContext);
};
