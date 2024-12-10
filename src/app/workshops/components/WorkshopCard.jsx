import Link from "next/link";
import WorkshopMapButton from "./WorkshopMapButton";
import WorkshopMapEmbed from "./WorkshopMapEmbed";

const WorkshopCard = ({ workshop }) => {
  const handleMapClick = () => {
    alert(`Mostrando ubicación de ${workshop.name}`);
  };





  return (
    <div className="bg-white border border-neutral-dark rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 w-full">
      {/* Nombre del taller */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-primary">{workshop.name}</h2>
      </div>

      {/* Ubicación completa */}
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

      {/* Información de contacto */}
      <p className="text-neutral-dark mb-2">
        <strong>Teléfono:</strong> {workshop.phone_number || "No disponible"}
      </p>
      <p className="text-neutral-dark mb-2">
        <strong>Email:</strong> {workshop.email || "No disponible"}
      </p>

      {/* Coordenadas */}
      <p className="text-neutral-dark mb-2">
        <strong>Coordenadas:</strong>{" "}
        {workshop.latitude && workshop.longitude
          ? `${workshop.latitude}, ${workshop.longitude}`
          : "No disponibles"}
      </p>

      {/* Descripción */}
      <p className="text-neutral-dark mb-4">
        <strong>Descripción:</strong> {workshop.description || "Sin descripción"}
      </p>

      {/* Botones y funcionalidad */}
      <div className="flex justify-between items-center mt-4">
        <Link
          href={`/workshops/${workshop.id}`}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
        >
          Ver Detalles
        </Link>
        <WorkshopMapButton name={workshop.name} onClick={handleMapClick} />
      </div>

      {/* Mapa embebido */}
      <WorkshopMapEmbed mapUrl={workshop.mapUrl} />
    </div>
  );
};

export default WorkshopCard;
