// src/app/workshops/components/ReviewSummary.jsx

const ReviewSummary = ({ reviews }) => (
    <div>
      <h3 className="text-lg font-bold mb-2">Reseñas recientes:</h3>
      <ul className="list-disc list-inside space-y-1">
        {reviews.slice(0, 2).map((review, index) => (
          <li key={index} className="text-neutral-dark">
            {review.comment} - <span className="font-semibold">{review.user}</span>
          </li>
        ))}
      </ul>
      {reviews.length > 2 && (
        <button className="text-primary mt-2 hover:underline">
          Ver todas las reseñas
        </button>
      )}
    </div>
  );
  
  export default ReviewSummary;
  