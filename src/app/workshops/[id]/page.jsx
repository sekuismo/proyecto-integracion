// src/app/workshops/[id]/page.jsx
"use client";

import { useEffect, useState } from "react";
import React from "react";
import NotFoundWorkshop from "../components/NotFoundWorkshop";

export default function WorkshopDetails({ params }) {
  const { id } = React.use(params);
  const [workshop, setWorkshop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkshopDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/workshops`);
        if (!response.ok) throw new Error("Error al cargar los detalles del taller");

        const data = await response.json();

        // Filtrar el taller correspondiente por ID
        const selectedWorkshop = data.find((workshop) => workshop.id === parseInt(id, 10));
        if (!selectedWorkshop) throw new Error("Taller no encontrado");

        setWorkshop(selectedWorkshop);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshopDetails();
  }, [id]);

  if (loading) return <p className="text-center">Cargando taller...</p>;
  if (error) return  <NotFoundWorkshop/> 

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-pixel text-primary mb-4">{workshop.name}</h1>
      <p className="text-neutral-dark mb-2">Ubicación: {workshop.location}</p>
      <p className="text-neutral-dark mb-2">Puntuación: {workshop.rating}</p>
      <p className="text-neutral-dark mb-2">Servicios: {workshop.services.join(", ")}</p>
      <p className="text-neutral-dark mb-4">Descripción: {workshop.description || "Sin descripción disponible"}</p>
      <h2 className="text-xl font-bold mb-4 text-neutral-dark">Reseñas:</h2>
      {workshop.reviews.length > 0 ? (
        <ul className="list-disc list-inside space-y-2">
          {workshop.reviews.map((review, index) => (
            <li key={index} className="text-neutral-dark">
              <span className="font-semibold">{review.user}</span>: {review.comment}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-neutral-dark">No hay reseñas disponibles para este taller.</p>
      )}
    </div>
  );
}
