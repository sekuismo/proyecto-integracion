"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import NotFoundWorkshop from "../components/NotFoundWorkshop";
import useWorkshops from "@/app/Hooks/UseWorkshops";
import WorkshopGeneralInfo from "../componentsDetail/WorkshopGeneralInfo";

import WorkshopMap from "../componentsDetail/WorkshopMap";
import WorkshopServices from "../components/WorkshopsServices"
import WorkshopReviews from "../componentsDetail/WorkshopReviews";
import WorkshopCommentForm from "../componentsDetail/WorkshopCommentForm";

export default function WorkshopDetails() {
  const params = useParams();
  const { id } = params || {};
  const { workshops, loading, error } = useWorkshops();
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  if (!id) {
    return <p className="text-center">Cargando...</p>;
  }

  const workshopId = parseInt(id, 10);
  const workshop = workshops?.find((w) => w.id === workshopId);

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
  if (error || !workshop) {
    return <NotFoundWorkshop />;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 space-y-12">
      <h1 className="text-3xl font-pixel text-primary mb-4">{workshop.name}</h1>
      <WorkshopGeneralInfo workshop={workshop} />
      <p className="text-neutral-dark mb-4">
        <strong>Descripción:</strong> {workshop.description || "Sin descripción disponible"}
      </p>
      <WorkshopMap mapUrl={workshop.mapUrl} />
      <WorkshopServices workshopId={workshopId} />
      <WorkshopReviews workshopId={workshopId} />
      <WorkshopCommentForm
      workshopId={workshopId}

      />
    </div>
  );
}
