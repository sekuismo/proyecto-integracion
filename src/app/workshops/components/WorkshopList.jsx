// src/app/workshops/components/WorkshopList.jsx
import WorkshopCard from "./WorkshopCard";

const WorkshopList = ({ workshops }) => (
  <div className="flex flex-col gap-6">
    {workshops.length > 0 ? (
      workshops.map((workshop) => (
        <div key={workshop.id} className="w-full">
          <WorkshopCard workshop={workshop} />
        </div>
      ))
    ) : (
      <p className="text-center text-neutral-dark">No se encontraron talleres.</p>
    )}
  </div>
);

export default WorkshopList;
