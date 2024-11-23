"use client"
// src/context/GlobalContext.jsx
import React, { createContext, useContext } from "react";
import WorkshopProvider from "./WorkshopContext";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{}}>
      {/* Agregar más contextos aquí si es necesario */}
      <WorkshopProvider>{children}</WorkshopProvider>
    </GlobalContext.Provider>
  );
};

// Custom hook para usar el GlobalContext (si lo necesitas en el futuro)
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
