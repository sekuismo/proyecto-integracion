// src/app/workshops/components/WorkshopMapEmbed.jsx
const WorkshopMapEmbed = ({ mapUrl }) => {
    if (!mapUrl) return null; // Si no hay URL, no renderiza nada
  
    return (
      <div className="mt-4">
        <iframe
          src={mapUrl}
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    );
  };
  
  export default WorkshopMapEmbed;
  