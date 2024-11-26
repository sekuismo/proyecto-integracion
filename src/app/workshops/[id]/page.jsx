"use client";

import React from "react";
import { useState } from "react";
import NotFoundWorkshop from "../components/NotFoundWorkshop";

import useWorkshops from "@/app/Hooks/UseWorkshops";

const WorkshopMapEmbed = ({ mapUrl }) => {
  if (!mapUrl) return null;

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
  const { id } = React.use(params)
  const { workshops, loading, error } = useWorkshops();
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  // Encontrar el taller específico por su ID
  const workshop = workshops.find((w) => w.id === parseInt(id, 10));

  if (loading) return <p className="text-center">Cargando taller...</p>;
  if (error || !workshop) return <NotFoundWorkshop />;

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newReview = { user: "Usuario Anónimo", comment: newComment.trim() };
      setComments([...comments, newReview]);
      setNewComment("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-pixel text-primary mb-4">{workshop.name}</h1>

      {/* Información detallada del taller */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-neutral-dark mb-2">
            <strong>Dirección:</strong> {workshop.address || "No disponible"}
          </p>
          <p className="text-neutral-dark mb-2">
            <strong>Comuna:</strong> {workshop.commune || "No disponible"}
          </p>
          <p className="text-neutral-dark mb-2">
            <strong>Ciudad:</strong> {workshop.city || "No disponible"}
          </p>
          <p className="text-neutral-dark mb-2">
            <strong>País:</strong> {workshop.country || "No disponible"}
          </p>
        </div>
        <div>
          <p className="text-neutral-dark mb-2">
            <strong>Teléfono:</strong> {workshop.phone_number || "No disponible"}
          </p>
          <p className="text-neutral-dark mb-2">
            <strong>Email:</strong> {workshop.email || "No disponible"}
          </p>
          <p className="text-neutral-dark mb-2">
            <strong>Coordenadas:</strong>{" "}
            {workshop.latitude && workshop.longitude
              ? `${workshop.latitude}, ${workshop.longitude}`
              : "No disponibles"}
          </p>
        </div>
      </div>

      <p className="text-neutral-dark mb-4">
        <strong>Descripción:</strong> {workshop.description || "Sin descripción disponible"}
      </p>
      <p className="text-neutral-dark mb-4">
        <strong>Creado el:</strong> {new Date(workshop.created_at).toLocaleString()}
      </p>
      <p className="text-neutral-dark mb-4">
        <strong>Última actualización:</strong> {new Date(workshop.updated_at).toLocaleString()}
      </p>

      {/* Mapa */}
      <WorkshopMapEmbed mapUrl={workshop.mapUrl} />

      {/* Reseñas */}
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

      {/* Formulario de comentarios */}
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
