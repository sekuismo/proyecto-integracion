// src/app/workshops/components/WorkshopCard.jsx
import Link from "next/link";
import RatingBadge from "./RatingBadge";
import ReviewSummary from "./ReviewSummary";
import WorkshopMapButton from "./WorkshopMapButton";

const WorkshopCard = ({ workshop }) => {
  const handleMapClick = () => {
    alert(`Mostrando ubicación de ${workshop.name}`);
  };

  return (
    <div className="bg-white border border-neutral-dark rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 w-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-primary">{workshop.name}</h2>
        <RatingBadge rating={workshop.rating} />
      </div>
      <p className="text-neutral-dark mb-2">Ubicación: {workshop.location}</p>
      <p className="text-primary mb-4">Servicios: {workshop.services.join(", ")}</p>
      <ReviewSummary reviews={workshop.reviews} />
      <div className="flex justify-between items-center mt-4">
        <Link
          href={`/workshops/${workshop.id}`}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
        >
          Ver Detalles
        </Link>
        <WorkshopMapButton name={workshop.name} onClick={handleMapClick} />
      </div>
    </div>
  );
};

export default WorkshopCard;
