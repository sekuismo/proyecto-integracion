// src/app/componentes/workshops/WorkshopList.jsx
import WorkshopCard from "./WorkshopCard";

const WorkshopList = ({ workshops }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {workshops.length > 0 ? (
      workshops.map((workshop) => (
        <WorkshopCard key={workshop.id} workshop={workshop} />
      ))
    ) : (
      <p className="text-neutral-dark">No se encontraron talleres.</p>
    )}
  </div>
);

export default WorkshopList;
