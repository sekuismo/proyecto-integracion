"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NotFoundWorkshop from "../components/NotFoundWorkshop";
import useWorkshops from "@/app/Hooks/UseWorkshops";
import WorkshopGeneralInfo from "../componentsDetail/WorkshopGeneralInfo";
import WorkshopMap from "../componentsDetail/WorkshopMap";
import WorkshopServices from "../components/WorkshopsServices";
import WorkshopReviews from "../componentsDetail/WorkshopReviews";
import WorkshopCommentForm from "../componentsDetail/WorkshopCommentForm";

export default function WorkshopDetails() {
  const params = useParams();
  const { id } = params || {};
  const { selectedWorkshop, loading, error, fetchWorkshopById } = useWorkshops();
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (id) {
      fetchWorkshopById(id); // Cargar el taller específico por ID
    }
  }, [id]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newReview = { user: "Usuario Anónimo", comment: newComment.trim() };
      setComments([...comments, newReview]);
      setNewComment("");
    }
  };

  if (loading) {
    return <p className="text-center">Cargando información...</p>;
  }

  if (error || !selectedWorkshop) {
    return <NotFoundWorkshop />;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 space-y-12">
      <h1 className="text-3xl font-pixel text-primary mb-4">{selectedWorkshop.name}</h1>
      <WorkshopGeneralInfo workshop={selectedWorkshop} />
      <p className="text-neutral-dark mb-4">
        <strong>Descripción:</strong> {selectedWorkshop.description || "Sin descripción disponible"}
      </p>
      <WorkshopMap mapUrl={selectedWorkshop.mapUrl} />
      <WorkshopServices workshopId={selectedWorkshop.id} />
      <WorkshopReviews workshopId={selectedWorkshop.id} />
      <WorkshopCommentForm workshopId={selectedWorkshop.id} />
    </div>
  );
}
