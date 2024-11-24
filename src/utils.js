import fs from 'fs';
import path from 'path';

// Función para leer datos de un archivo JSON
export const readData = (filename) => {
  const filePath = path.join(process.cwd(), 'src', 'data', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

// Función para escribir datos en un archivo JSON
export const writeData = (filename, data) => {
  const filePath = path.join(process.cwd(), 'src', 'data', filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};
