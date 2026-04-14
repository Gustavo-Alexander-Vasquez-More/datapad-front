import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // <-- Importar Image
import { icons } from 'lucide-react';

// Componente auxiliar para renderizar iconos dinámicamente
const LucideIcon = ({ name, color, size }) => {
  const LucideIconComponent = icons[name];

  if (!LucideIconComponent) {
    return null; // O un icono por defecto
  }

  return <LucideIconComponent color={color} size={size} />;
};


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C2939] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo e Info */}
          <div>
            <Link href="/">
              <Image 
                src="/logo.png" // Asegúrate que esta es la ruta correcta a tu logo
                alt="Logo de Datapad" 
                width={120} 
                height={80} 
              />
            </Link>
            <p className="mt-4 text-gray-400">Protegiendo el valor de tus documentos.</p>
            <p className="mt-2 text-gray-400">Ciudad de México, México.</p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold">Navegación</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/productos" className="hover:text-blue-400">Productos</Link></li>
              <li><Link href="/servicios" className="hover:text-blue-400">Servicios</Link></li>
              <li><Link href="/nosotros" className="hover:text-blue-400">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-blue-400">Contacto</Link></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-semibold">Síguenos</h4>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <LucideIcon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <LucideIcon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <LucideIcon name="Linkedin" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Datapad. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}