import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-blue-600">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          ¿Listo para dar el siguiente paso?
        </h2>
        <p className="mt-4 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
          Explora nuestro catálogo de soluciones o contáctanos para una asesoría personalizada. Estamos aquí para ayudarte.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/productos"
            className="rounded-md bg-white px-4 py-2.5 text-base font-semibold text-blue-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Ver Productos
          </Link>
          <Link 
            href="/contacto" 
            className="text-base font-semibold leading-6 text-white hover:text-blue-100"
          >
            Contáctanos <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}