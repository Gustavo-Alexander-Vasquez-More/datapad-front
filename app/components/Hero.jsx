import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importación del componente Image

export default function Hero() {
  return (
    <section className="relative h-[60vh] text-white flex items-center justify-center">
      {/* Componente Image para el fondo */}
      <Image
        src="/hero.jpg"
        alt="Fondo de papelería de seguridad"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0" // Se asegura que la imagen esté en el fondo
      />
      
      {/* Superposición oscura para legibilidad */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Protegiendo el Valor de tus Documentos
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Somos especialistas en papelería de seguridad, hologramas, hojas valoradas y soluciones para la documentación oficial en México.
        </p>
        <Link 
          href="/productos" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Ver Productos
        </Link>
      </div>
    </section>
  );
}
