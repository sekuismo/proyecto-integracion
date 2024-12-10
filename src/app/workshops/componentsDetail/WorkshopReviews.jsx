import React from "react";
import useReviews from "@/app/Hooks/UseReviews";

const WorkshopReviews = ({ workshopId }) => {
  const { reviews, loading, error } = useReviews(workshopId); // Pasar el workshopId al hook

  if (loading) {
    return <p className="text-center text-gray-500">Cargando reseñas...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error al cargar reseñas: {error}</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-center text-gray-500">No hay reseñas disponibles para este taller.</p>;
  }

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Reseñas
      </h2>
      <ul className="space-y-4">
        {reviews.map((review) => (
          <li
            key={review.id}
            className="bg-gray-50 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="mt-1  text-lg text-gray-600">
              <strong>{review.user}</strong> 
            </p>
            <p className="text-gray-700">{review.body}</p>
            <p className="mt-2 text-sm text-gray-600">
              {review.recommend ? (
                <span className="text-green-600 font-semibold">Recomendado</span>
              ) : (
                <span className="text-red-600 font-semibold">No recomendado</span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkshopReviews;
