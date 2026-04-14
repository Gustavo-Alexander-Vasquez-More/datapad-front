import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileText, Truck } from 'lucide-react';

const categories = [
  {
    name: 'Papelería de Seguridad',
    description: 'Hojas valoradas y papeles con medidas de seguridad para documentos oficiales.',
    href: '/productos/seguridad',
    icon: <FileText className="h-12 w-12 text-blue-600" />
  },
  {
    name: 'Hologramas y Etiquetas',
    description: 'Soluciones holográficas personalizadas para la autenticación de productos.',
    href: '/productos/hologramas',
    icon: <ShieldCheck className="h-12 w-12 text-blue-600" />
  },
  {
    name: 'Logística y Envíos',
    description: 'Guías de envío prepagadas de DHL y material de empaque especializado.',
    href: '/productos/logistica',
    icon: <Truck className="h-12 w-12 text-blue-600" />
  }
];

export default function FeaturedCategories() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestras Soluciones</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">Materiales de alta calidad para garantizar la autenticidad y seguridad.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="block group">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                <p className="mt-2 text-gray-600">{category.description}</p>
                <span className="mt-4 inline-block text-blue-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Ver más &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
