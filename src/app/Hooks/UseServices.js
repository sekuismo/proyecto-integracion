import { useEffect, useState } from "react";
import axios from "axios";

const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "https://test-api-dev-4u46.onrender.com/api/servicios/";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);

        const response = await axios.get(baseUrl);
        setServices(response.data); // Devuelve todos los servicios
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};

export default useServices;
