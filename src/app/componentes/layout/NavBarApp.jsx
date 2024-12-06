// src/app/components/common/NavBarApp.js

"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

const NavBarApp = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout(); // Lógica para cerrar sesión
    router.push("/"); // Redirige a la página principal
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Talleres certeros
        </Link>

        {/* Links de navegación */}
        <div className="space-x-4 flex items-center">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <Link href="/workshops" className="hover:underline">
            Talleres
          </Link>
          {user && (
            <Link href="/new" className="hover:underline">
              Agregar taller
            </Link>
          )}
          <Link href="/profile" className="hover:underline">
            Perfil
          </Link>

          {user ? (
            <>
              <span className="text-gray-300">Hola, {user.username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link href="/login" className="hover:underline">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBarApp;
