// src/app/Hooks/UseWorkshops.js
import { useEffect, useState } from "react";

const useWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWorkshops() {
      try {
        setLoading(true);
        const res = await fetch("/api/workshops");
        if (!res.ok) throw new Error("Error al cargar talleres");
        const data = await res.json();
        setWorkshops(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWorkshops();
  }, []);

  return { workshops, loading, error };
};

export default useWorkshops;
