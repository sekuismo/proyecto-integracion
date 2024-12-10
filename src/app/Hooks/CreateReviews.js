import { useState } from "react";
import axios from "axios";

import { useAuth } from "@/context/AuthProvider";

const useCreateReviews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useAuth(); // Obtener el token desde el contexto de autenticación

  const baseUrl = "https://test-api-dev-4u46.onrender.com/api/reviews/";

  const createReview = async ({ body, workshopId, rating, recommend }) => {
    try {
      console.log("Iniciando la creación de la reseña...");
      console.log("Token recibido:", token);

      if (!token) {
        throw new Error("No se encontró el token de autenticación.");
      }

      if (!workshopId) {
        throw new Error("El ID del taller no se proporcionó correctamente.");
      }

      setLoading(true);
      setError(null);

      const reviewData = {
        rating: parseFloat(rating), // Asegura que sea un número válido
        title: "Comentario de usuario", // Puedes cambiar esto si es necesario
        body: body.trim(),
        recommend: recommend,
        workshop: parseInt(workshopId, 10), // Convierte el ID a entero
      };

      console.log("Datos de la reseña a enviar:", reviewData);

      const response = await axios.post(baseUrl, reviewData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`, // Usar el prefijo correcto para el token
        },
      });

      console.log("Respuesta exitosa del backend:", response.data);
      return response.data;
    } catch (err) {
      console.error("Error al enviar la reseña:", err);
      console.log("Detalles del error:", err.response?.data);

      // Capturar mensajes de error del backend
      const backendMessage =
        err.response?.data || "Error desconocido en el servidor.";
      setError(backendMessage);

      // Relanzar el error para manejarlo en el componente llamador
      throw err;
    } finally {
      setLoading(false);
      console.log("Finalizó la operación de creación de la reseña.");
    }
  };

  return { createReview, loading, error };
};

export default useCreateReviews;
