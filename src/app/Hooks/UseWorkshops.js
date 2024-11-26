import { useEffect, useState } from "react";

const useWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "https://test-api-dev-4u46.onrender.com/api/talleres/";

  // Fetch inicial de talleres (Read)
  useEffect(() => {
    async function fetchWorkshops() {
      try {
        console.log("[Fetch Workshops] Iniciando solicitud GET...");
        setLoading(true);

        const res = await fetch(baseUrl);
        console.log("[Fetch Workshops] Respuesta:", res);

        if (!res.ok) {
          const errorDetails = await res.text(); // Obtener el cuerpo de respuesta en caso de error
          console.error("[Fetch Workshops] Error en la respuesta:", errorDetails);
          throw new Error(`Error al cargar talleres: ${res.status} - ${res.statusText}`);
        }

        const data = await res.json();
        console.log("[Fetch Workshops] Datos recibidos:", data);

        setWorkshops(data);
      } catch (err) {
        console.error("[Fetch Workshops] Error en el try-catch:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
        console.log("[Fetch Workshops] Solicitud completada.");
      }
    }

    fetchWorkshops();
  }, []);

  // Crear un nuevo taller (Create)
  const addWorkshop = async (newWorkshop) => {
    try {
      console.log("[Add Workshop] Iniciando solicitud POST con datos:", newWorkshop);
      setLoading(true);

      const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWorkshop),
      });
      console.log("[Add Workshop] Respuesta:", res);

      if (!res.ok) {
        const errorDetails = await res.text();
        console.error("[Add Workshop] Error en la respuesta:", errorDetails);
        throw new Error(`Error al agregar el taller: ${res.status} - ${res.statusText}`);
      }

      const savedWorkshop = await res.json();
      console.log("[Add Workshop] Taller guardado:", savedWorkshop);

      setWorkshops((prevWorkshops) => [...prevWorkshops, savedWorkshop]);
    } catch (err) {
      console.error("[Add Workshop] Error en el try-catch:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
      console.log("[Add Workshop] Solicitud completada.");
    }
  };

  // Actualizar un taller existente (Update)
  const updateWorkshop = async (id, updatedWorkshop) => {
    try {
      console.log("[Update Workshop] Iniciando solicitud PUT con datos:", updatedWorkshop);
      setLoading(true);

      const res = await fetch(`${baseUrl}${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedWorkshop),
      });
      console.log("[Update Workshop] Respuesta:", res);

      if (!res.ok) {
        const errorDetails = await res.text();
        console.error("[Update Workshop] Error en la respuesta:", errorDetails);
        throw new Error(`Error al actualizar el taller: ${res.status} - ${res.statusText}`);
      }

      const updatedData = await res.json();
      console.log("[Update Workshop] Taller actualizado:", updatedData);

      setWorkshops((prevWorkshops) =>
        prevWorkshops.map((workshop) =>
          workshop.id === id ? updatedData : workshop
        )
      );
    } catch (err) {
      console.error("[Update Workshop] Error en el try-catch:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
      console.log("[Update Workshop] Solicitud completada.");
    }
  };

  // Eliminar un taller existente (Delete)
  const deleteWorkshop = async (id) => {
    try {
      console.log("[Delete Workshop] Iniciando solicitud DELETE para ID:", id);
      setLoading(true);

      const res = await fetch(`${baseUrl}${id}/`, {
        method: "DELETE",
      });
      console.log("[Delete Workshop] Respuesta:", res);

      if (!res.ok) {
        const errorDetails = await res.text();
        console.error("[Delete Workshop] Error en la respuesta:", errorDetails);
        throw new Error(`Error al eliminar el taller: ${res.status} - ${res.statusText}`);
      }

      setWorkshops((prevWorkshops) =>
        prevWorkshops.filter((workshop) => workshop.id !== id)
      );
    } catch (err) {
      console.error("[Delete Workshop] Error en el try-catch:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
      console.log("[Delete Workshop] Solicitud completada.");
    }
  };

  return {
    workshops,
    loading,
    error,
    addWorkshop,
    updateWorkshop,
    deleteWorkshop,
  };
};

export default useWorkshops;
