"use client";

import React from "react";
import Link from "next/link";

function NotFoundWorkshop() {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/08/30/16/20/fantasy-2692022_1280.jpg')", // Nueva imagen pixel art
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-pixel mb-4">Taller No Encontrado</h1>
        <p className="text-lg mb-6">
          Lo sentimos, no pudimos encontrar el taller que buscas. Por favor, intenta nuevamente o vuelve a la lista de talleres.
        </p>
        <Link
          href="/workshops"
          className="inline-block px-6 py-3 bg-primary text-white text-lg rounded-lg hover:bg-primary-dark transition"
        >
          Volver a Talleres
        </Link>
      </div>
    </div>
  );
}

export default NotFoundWorkshop;
