import { useState } from "react";
import axios from "axios";

const useWorkshops = (token) => {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null); // Nuevo estado para un taller específico

  const API_URL = "https://test-api-dev-4u46.onrender.com/api/talleres/";

  // Obtener todos los talleres
  const fetchWorkshops = async () => {
    console.log("fetchWorkshops: Iniciando la solicitud para obtener talleres...");
    setLoading(true);
    setError(null);
    try {
      const headers = token ? { Authorization: `Token ${token}` } : {};
      const response = await axios.get(API_URL, { headers });
      console.log("fetchWorkshops: Talleres obtenidos con éxito:", response.data);
      setWorkshops(response.data);
    } catch (err) {
      console.error("fetchWorkshops: Error al obtener talleres:", err);
      setError("Error al obtener talleres");
    } finally {
      setLoading(false);
    }
  };

  // Obtener un taller específico por ID
  const fetchWorkshopById = async (id) => {
    console.log(`fetchWorkshopById: Solicitando taller con ID ${id}...`);
    setLoading(true);
    setError(null);
    try {
      const headers = token ? { Authorization: `Token ${token}` } : {};
      const response = await axios.get(`${API_URL}${id}/`, { headers });
      console.log("fetchWorkshopById: Taller obtenido con éxito:", response.data);
      setSelectedWorkshop(response.data);
    } catch (err) {
      console.error(`fetchWorkshopById: Error al obtener el taller con ID ${id}:`, err);
      setError("Error al obtener el taller");
    } finally {
      setLoading(false);
    }
  };

  const addWorkshop = async (workshopData) => {
    console.log("addWorkshop: Iniciando la solicitud para agregar un taller...", workshopData);
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(API_URL, workshopData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });
      console.log("addWorkshop: Taller agregado con éxito:", response.data);
      setWorkshops((prev) => [...prev, response.data]);
    } catch (err) {
      console.error("addWorkshop: Error al agregar el taller:", err);
      setError("Error al agregar el taller");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    workshops,
    loading,
    error,
    selectedWorkshop,
    fetchWorkshops,
    fetchWorkshopById,
    addWorkshop,
  };
};

export default useWorkshops;
