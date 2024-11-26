import { useEffect, useState } from "react";
import axios from "axios";

const useWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "https://test-api-dev-4u46.onrender.com/api/talleres/";

  // Fetch inicial de talleres (GET)
  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        console.log("[Fetch Workshops] Iniciando solicitud GET...");
        setLoading(true);

        const response = await axios.get(baseUrl, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("[Fetch Workshops] Respuesta completa:", response);
        console.log("[Fetch Workshops] Headers:", response.headers);
        console.log("[Fetch Workshops] Data recibida:", response.data);

        setWorkshops(response.data);
      } catch (err) {
        console.error("[Fetch Workshops] Error:");
        if (err.response) {
          // Errores del servidor
          console.error("Estado del servidor:", err.response.status);
          console.error("Headers de respuesta:", err.response.headers);
          console.error("Data de error:", err.response.data);
        } else if (err.request) {
          // Errores relacionados con la red
          console.error("Solicitud no recibió respuesta:", err.request);
        } else {
          // Errores de configuración de Axios
          console.error("Error al configurar la solicitud:", err.message);
        }
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
        console.log("[Fetch Workshops] Solicitud completada.");
      }
    };

    fetchWorkshops();
  }, []);

  // Crear un nuevo taller (POST)
  const addWorkshop = async (newWorkshop) => {
    try {
      console.log("[Add Workshop] Enviando datos:", newWorkshop);
      setLoading(true);

      const response = await axios.post(baseUrl, newWorkshop, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("[Add Workshop] Respuesta completa:", response);
      console.log("[Add Workshop] Data guardada:", response.data);

      setWorkshops((prevWorkshops) => [...prevWorkshops, response.data]);
    } catch (err) {
      console.error("[Add Workshop] Error:");
      if (err.response) {
        // Errores del servidor
        console.error("Estado del servidor:", err.response.status);
        console.error("Headers de respuesta:", err.response.headers);
        console.error("Data de error:", err.response.data);
      } else if (err.request) {
        // Errores relacionados con la red
        console.error("Solicitud no recibió respuesta:", err.request);
      } else {
        // Errores de configuración de Axios
        console.error("Error al configurar la solicitud:", err.message);
      }
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
      console.log("[Add Workshop] Solicitud completada.");
    }
  };

  return {
    workshops,
    loading,
    error,
    addWorkshop,
  };
};

export default useWorkshops;
