// src/app/workshops/components/WorkshopMapButton.jsx

const WorkshopMapButton = ({ name, onClick }) => (
    <button
      onClick={onClick}
      className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark"
    >
      Ver en el Mapa
    </button>
  );
  
  export default WorkshopMapButton;
  