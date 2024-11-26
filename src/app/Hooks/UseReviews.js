import { useEffect, useState } from "react";
import axios from "axios";

const useReviews = () => {
  const [reviews, setReviews] = useState([]); // Contiene todas las reseñas
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "https://test-api-dev-4u46.onrender.com/api/reviews/";

  // Obtener todas las reseñas
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(baseUrl);
        setReviews(response.data); // Guardar todas las reseñas
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, loading, error };
};

export default useReviews;
