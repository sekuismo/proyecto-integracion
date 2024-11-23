// src/api/workshops/route.js
import { NextResponse } from "next/server";

const workshopsMock = [
  {
    id: 1,
    name: "Taller A",
    location: "Providencia, Calle Pedro de Valdivia 123",
    rating: 4.7,
    services: ["Reparación de bicicletas", "Venta de accesorios", "Mantenimiento"],
    reviews: [
      { user: "Juan", comment: "Excelente servicio, muy rápido y profesional." },
      { user: "María", comment: "Buen precio, pero un poco lento en la entrega." },
      { user: "Pablo", comment: "El personal fue muy amable y resolvieron mi problema." },
      { user: "Ana", comment: "Buena experiencia, aunque el taller estaba muy lleno." },
      { user: "Roberto", comment: "Tienen una gran variedad de accesorios." },
    ],
    coordinates: { lat: -33.4263, lng: -70.6157 },
  },
  {
    id: 2,
    name: "Taller B",
    location: "Las Condes, Av. Apoquindo 456",
    rating: 3.8,
    services: ["Reparación de bicicletas", "Pintura personalizada", "Mantenimiento avanzado"],
    reviews: [
      { user: "Luis", comment: "Buena calidad en las reparaciones, pero algo caro." },
      { user: "Ana", comment: "La atención fue regular, pero resolvieron el problema." },
      { user: "Valeria", comment: "La pintura personalizada quedó espectacular." },
      { user: "Camilo", comment: "No tenían todos los repuestos que necesitaba." },
      { user: "Javiera", comment: "El tiempo de espera fue muy largo." },
    ],
    coordinates: { lat: -33.4173, lng: -70.6042 },
  },
  {
    id: 3,
    name: "Taller C",
    location: "Santiago Centro, Av. Matta 789",
    rating: 4.2,
    services: ["Reparación", "Ajuste de frenos", "Venta de neumáticos"],
    reviews: [
      { user: "Carlos", comment: "Excelente ubicación y buena atención." },
      { user: "Paula", comment: "El ajuste de frenos fue rápido y efectivo." },
      { user: "Rodrigo", comment: "Tienen precios muy competitivos." },
      { user: "Fernanda", comment: "El taller estaba muy lleno, pero valió la pena." },
      { user: "Diego", comment: "Un poco caro, pero el trabajo es de calidad." },
    ],
    coordinates: { lat: -33.4500, lng: -70.6667 },
  },
  // Genera más talleres con 5 reseñas cada uno para completar 50 reseñas
];

export async function GET() {
  return NextResponse.json(workshopsMock);
}
