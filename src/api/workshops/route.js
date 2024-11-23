// src/api/workshops/route.js
import { NextResponse } from "next/server";

const workshopsMock = [
  { id: 1, name: "Taller A", location: "Calle 123", rating: 4.5 },
  { id: 2, name: "Taller B", location: "Calle 456", rating: 3.8 },
];

export async function GET() {
  return NextResponse.json(workshopsMock);
}
