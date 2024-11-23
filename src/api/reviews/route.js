// src/app/api/reseñas/route.js
import { NextResponse } from "next/server";

// Datos simulados
const reseñasMock = [
  { id: 1, tallerId: 1, comentario: "Muy buen servicio", puntuacion: 5 },
  { id: 2, tallerId: 1, comentario: "Un poco lento", puntuacion: 3 },
];

// GET: Obtener reseñas por taller
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const tallerId = searchParams.get("tallerId");

  const reseñas = reseñasMock.filter((r) => r.tallerId == tallerId);
  return NextResponse.json(reseñas);
}

// POST: Agregar nueva reseña
export async function POST(req) {
  const nuevaReseña = await req.json();
  reseñasMock.push({ id: Date.now(), ...nuevaReseña });
  return NextResponse.json({ message: "Reseña agregada con éxito" }, { status: 201 });
}
