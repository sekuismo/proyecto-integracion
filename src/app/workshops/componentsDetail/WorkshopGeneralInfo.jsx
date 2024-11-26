import React from "react";

const WorkshopGeneralInfo = ({ workshop }) => {
  return (
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
  );
};

export default WorkshopGeneralInfo;
