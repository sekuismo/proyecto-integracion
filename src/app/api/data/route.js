import { readData, writeData } from '@/utils';
import { NextResponse } from 'next/server';

const filename = 'database.json';

// Obtener toda la base de datos
export async function GET() {
  const data = readData(filename);
  return NextResponse.json(data);
}

// Actualizar la base de datos completa (POST o PUT)
export async function POST(request) {
  const updatedData = await request.json();
  writeData(filename, updatedData);
  return NextResponse.json({ message: 'Database updated successfully' });
}
