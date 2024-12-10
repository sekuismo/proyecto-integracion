import { useState, useEffect } from "react";
import axios from "axios";

const useReviews = (workshopId) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://test-api-dev-4u46.onrender.com/api/talleres/${workshopId}/`
        );
        setReviews(response.data.reviews || []); // Asegura que haya reseñas
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Error al obtener las reseñas.");
      } finally {
        setLoading(false);
      }
    };

    if (workshopId) {
      fetchReviews();
    }
  }, [workshopId]);

  return { reviews, loading, error };
};

export default useReviews;
