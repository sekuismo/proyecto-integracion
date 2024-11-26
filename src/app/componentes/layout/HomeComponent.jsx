import React from "react";

function HomeComponent() {
  return (
    <div className="bg-cover bg-center h-screen relative" style={{ backgroundImage: "url('/backimg.jpeg')" }}>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white text-center max-w-md p-4 bg-black bg-opacity-60 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Talleres Certeros</h1>
        <p className="text-lg">
          Encuentra el taller ideal para tus necesidades. Servicio confiable, rápido y cerca de ti.
        </p>
      </div>
    </div>
  );
}

export default HomeComponent;
