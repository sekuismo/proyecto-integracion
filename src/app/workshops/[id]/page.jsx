"use client";

import { useEffect, useState } from "react";
import React from "react";
import NotFoundWorkshop from "../components/NotFoundWorkshop";

// Componente reutilizable para mostrar el mapa
const WorkshopMapEmbed = ({ mapUrl }) => {
  if (!mapUrl) return null; // Si no hay URL, no renderiza nada

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-2">Ubicación en el mapa</h3>
      <iframe
        src={mapUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default function WorkshopDetails({ params }) {
  const { id } = React.use(params);
  const [workshop, setWorkshop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

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
        setComments(selectedWorkshop.reviews);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshopDetails();
  }, [id]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { user: "Usuario Anónimo", comment: newComment.trim() }, // Simulación de usuario
      ]);
      setNewComment("");
    }
  };

  if (loading) return <p className="text-center">Cargando taller...</p>;
  if (error) return <NotFoundWorkshop />;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-pixel text-primary mb-4">{workshop.name}</h1>
      <p className="text-neutral-dark mb-2">Ubicación: {workshop.location}</p>
      <p className="text-neutral-dark mb-2">Puntuación: {workshop.rating}</p>
      <p className="text-neutral-dark mb-2">Servicios: {workshop.services.join(", ")}</p>
      <p className="text-neutral-dark mb-4">
        Descripción: {workshop.description || "Sin descripción disponible"}
      </p>

      {/* Mapa del taller */}
      <WorkshopMapEmbed mapUrl={workshop.mapUrl} />

      <h2 className="text-xl font-bold mb-4 text-neutral-dark">Reseñas:</h2>
      {comments.length > 0 ? (
        <ul className="list-disc list-inside space-y-2">
          {comments.map((review, index) => (
            <li key={index} className="text-neutral-dark">
              <span className="font-semibold">{review.user}</span>: {review.comment}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-neutral-dark">No hay reseñas disponibles para este taller.</p>
      )}

      {/* Formulario para agregar nuevos comentarios */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Deja tu comentario:</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Escribe tu comentario aquí..."
        ></textarea>
        <button
          onClick={handleAddComment}
          className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
