"use client"; // Directiva para convertirlo en un Componente de Cliente

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react'; // Importamos los nuevos iconos
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1C2939] shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Sección Izquierda: Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Logo de la Tienda" 
              width={110} 
              height={70} 
              className="inline-block mr-2"
            />
          </Link>
        </div>

        {/* Sección Central (Pantallas Grandes): Navegación */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-[white] hover:text-blue-500 transition-colors duration-300">
            Inicio
          </Link>
          <Link href="/productos" className="text-[white] hover:text-blue-500 transition-colors duration-300">
            Productos
          </Link>
          <Link href="/nosotros" className="text-[white] hover:text-blue-500 transition-colors duration-300">
            Nosotros
          </Link>
          <Link href="/servicios" className="text-[white] hover:text-blue-500 transition-colors duration-300">
            Servicios
          </Link>
        </div>

        {/* Sección Derecha (Pantallas Grandes): Teléfono */}
        <div className="hidden md:flex items-center">
          <a 
            href="tel:+525512345678" 
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            <Phone size={18} className="mr-2" />
            <span>+52 55 1234 5678</span>
          </a>
        </div>

        {/* Botón de Hamburguesa (Pantallas Pequeñas) */}
        <div className="md:hidden text-[white]">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menú Móvil Desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 absolute w-full shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-6">
            <Link href="/" className="text-[white] hover:text-blue-500 text-lg" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="/productos" className="text-[white] hover:text-blue-500 text-lg" onClick={() => setIsMenuOpen(false)}>
              Productos
            </Link>
            <Link href="/nosotros" className="text-[white] hover:text-blue-500 text-lg" onClick={() => setIsMenuOpen(false)}>
              Nosotros
            </Link>
            <Link href="/servicios" className="text-[white] hover:text-blue-500 text-lg" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
