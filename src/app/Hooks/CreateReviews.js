import { useState } from "react";
import axios from "axios";

const useCreateReviews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseUrl = "https://test-api-dev-4u46.onrender.com/api/reviews/";

  const createReview = async ({ body, workshopId, rating, recommend }) => {
    try {
      setLoading(true);
      setError(null);

      // Construir el payload con valores dinámicos
      const reviewData = {
        rating: parseInt(rating, 10), // Convertir el rating a número
        title: "Comentario de usuario", // Valor predeterminado
        body: body.trim(), // El texto del comentario
        recommend: recommend, // Recibe el valor del formulario
        user: 1, // Usuario fijo para pruebas
        workshop: parseInt(workshopId, 10), // ID del taller como número entero
      };

      console.log("Payload enviado al backend:", reviewData);

      // Hacer la solicitud POST
      const response = await axios.post(baseUrl, reviewData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Respuesta del backend:", response.data);

      return response.data; // Retornar la respuesta del backend
    } catch (err) {
      console.error("Error al enviar la reseña:", err.response?.data || err.message);
      setError(err.response ? err.response.data : err.message);
      throw err; // Re-lanzar el error si es necesario manejarlo en el componente
    } finally {
      setLoading(false);
    }
  };

  return { createReview, loading, error };
};

export default useCreateReviews;
