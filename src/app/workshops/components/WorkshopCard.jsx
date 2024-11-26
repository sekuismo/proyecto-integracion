import Link from "next/link";
import RatingBadge from "./RatingBadge";
import ReviewSummary from "./ReviewSummary";
import WorkshopMapButton from "./WorkshopMapButton";
import WorkshopMapEmbed from "./WorkshopMapEmbed";

const WorkshopCard = ({ workshop }) => {
  const handleMapClick = () => {
    alert(`Mostrando ubicación de ${workshop.name}`);
  };

  return (
    <div className="bg-white border border-neutral-dark rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 w-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-primary">{workshop.name}</h2>
        {/* <RatingBadge rating={workshop.reviews.length > 0 ? workshop.reviews[0].rating : 0} /> */}
      </div>
      <p className="text-neutral-dark mb-2">
        Ubicación: {workshop.address}, {workshop.commune}, {workshop.city}
      </p>
      <p className="text-primary mb-4">
        {/* Servicios: {workshop.services.map((s) => s.service_name).join(", ")} */}
      </p>
      
      {/* Mostrar los 3 comentarios más relevantes */}
      {/* <ReviewSummary reviews={workshop.reviews} maxReviews={3} /> */}

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
