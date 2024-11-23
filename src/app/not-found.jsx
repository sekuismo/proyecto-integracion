// src/app/not-found.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-light text-neutral-dark">
      <h1 className="text-4xl font-pixel text-primary mb-4">404 - Página no encontrada</h1>
      <p className="text-lg">Lo sentimos, no pudimos encontrar la página que buscas.</p>
      <Link
        href="/"
        className="mt-4 text-primary hover:underline hover:text-primary-dark"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
