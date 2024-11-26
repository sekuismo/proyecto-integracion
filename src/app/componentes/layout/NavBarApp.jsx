// src/app/components/common/NavBarApp.js

import Link from 'next/link';

const NavBarApp = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Talleres certeros
        </Link>

        {/* Links de navegación */}
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <Link href="/workshops" className="hover:underline">
            Talleres
          </Link>
          <Link href="/new"  className='hover:underline'>
          Agregar taller
          </Link>
          <Link href="/profile" className="hover:underline">
            Perfil
          </Link>
          <Link href="/login" className="hover:underline">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarApp;
