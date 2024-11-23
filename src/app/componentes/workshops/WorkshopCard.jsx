// src/app/componentes/workshops/WorkshopCard.jsx

const WorkshopCard = ({ workshop }) => (
    <div className="border border-neutral-dark rounded-md p-4 bg-neutral-light shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-pixel text-primary mb-2">{workshop.name}</h2>
      <p className="text-neutral-dark">Ubicación: {workshop.location}</p>
      <p className="text-neutral-dark">Puntuación: {workshop.rating || "No calificado"}</p>
    </div>
  );
  
  export default WorkshopCard;
  