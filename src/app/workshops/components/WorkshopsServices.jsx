import React from "react";
import useServices from "@/app/Hooks/UseServices";

const WorkshopServices = ({ workshopId }) => {
  const { services, loading, error } = useServices();

  console.log("ID del taller:", workshopId);
  console.log("Servicios recibidos:", JSON.stringify(services, null, 2));

  if (loading)
    return <p className="text-center text-gray-500">Cargando servicios...</p>;

  if (error)
    return (
      <p className="text-center text-red-500">Error al cargar servicios: {error}</p>
    );

  // Filtrar servicios asociados al ID del taller
  const filteredServices = services.filter(
    (service) => service.workshop === parseInt(workshopId, 10)
  );

  if (filteredServices.length === 0) {
    console.log(`No hay servicios para el taller con ID: ${workshopId}`);
    return (
      <p className="text-center text-gray-500">
        Este taller no tiene servicios disponibles.
      </p>
    );
  }

  console.log("Servicios filtrados:", JSON.stringify(filteredServices, null, 2));

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Servicios ofrecidos
      </h3>
      <ul className="space-y-4">
        {filteredServices.map((service) => (
          <li
            key={service.id}
            className="bg-gray-50 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h4 className="text-lg font-bold text-gray-700">
              {service.service_name}
            </h4>
            <p className="text-gray-600">{service.description}</p>
            <p className="mt-2 text-gray-800">
              <span className="font-semibold">Precio:</span> ${service.price}
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Duración:</span>{" "}
              {service.duration_minutes} minutos
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkshopServices;
