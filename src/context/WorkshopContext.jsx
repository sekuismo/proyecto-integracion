// src/context/WorkshopContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const WorkshopContext = createContext();

export const WorkshopProvider = ({ children }) => {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        console.log("Llamando a /api/workshops...");
        const response = await fetch("/api/workshops");
        console.log("Estado de respuesta:", response.status);
        if (!response.ok) throw new Error("Error al cargar los talleres");
        const data = await response.json();
        console.log("Datos recibidos:", data);
        setWorkshops(data);
      } catch (err) {
        console.error("Error al consumir la API:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchWorkshops();
  }, []);
  

  return (
    <WorkshopContext.Provider value={{ workshops, loading, error }}>
      {children}
    </WorkshopContext.Provider>
  );
};

export const useWorkshops = () => {
  return useContext(WorkshopContext);
};

export default WorkshopProvider;
