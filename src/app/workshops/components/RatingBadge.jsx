// src/app/workshops/components/RatingBadge.jsx

const getRatingLabel = (rating) => {
    if (rating >= 4.5) return { label: "Extremadamente positivo", color: "bg-green-500" };
    if (rating >= 4) return { label: "Mayormente positivo", color: "bg-blue-500" };
    if (rating >= 3) return { label: "Mixto", color: "bg-yellow-500" };
    if (rating < 3) return { label: "Mayormente negativo", color: "bg-red-500" };
    return { label: "Sin calificar", color: "bg-gray-500" };
  };
  
  const RatingBadge = ({ rating }) => {
    const { label, color } = getRatingLabel(rating);
  
    return (
      <span
        className={`inline-block px-3 py-1 text-sm text-white rounded-full ${color}`}
      >
        {label}
      </span>
    );
  };
  
  export default RatingBadge;
  