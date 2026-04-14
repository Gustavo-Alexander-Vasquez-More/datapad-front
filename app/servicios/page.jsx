import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PenTool, ShieldCheck, Truck, MessageCircle, DraftingCompass, PackageCheck } from 'lucide-react';

// Metadata para SEO y redes sociales
export const metadata = {
  title: 'Servicios de Seguridad Documental y Logística | Datapad',
  description: 'Ofrecemos servicios de diseño de hologramas, impresión de papelería de seguridad, y gestión de guías de envío. Soluciones integrales para tu empresa en México.',
  openGraph: {
    title: 'Servicios Profesionales de Seguridad Documental | Datapad',
    description: 'Desde el diseño de hologramas hasta la logística de envío, conoce cómo podemos ayudarte.',
    url: 'https://datapad.xvalsites.xyz/servicios', // <-- CAMBIAR: URL completa de tu sitio
    siteName: 'Datapad',
    images: [
      {
        url: 'https://datapad.xvalsites.xyz/og-servicios.jpg', // <-- CAMBIAR: Imagen específica para compartir
        width: 1200,
        height: 630,
        alt: 'Nuestros servicios de seguridad documental',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Seguridad Documental y Logística | Datapad',
    description: 'Soluciones integrales en diseño de hologramas, impresión de seguridad y logística.',
    images: ['https://datapad.xvalsites.xyz/og-servicios.jpg'], // <-- CAMBIAR: Misma imagen que Open Graph
  },
};

export const runtime = 'edge';

const services = [
  {
    name: 'Diseño de Hologramas Personalizados',
    description: 'Creamos diseños holográficos únicos y complejos que son virtualmente imposibles de replicar, garantizando la máxima autenticidad para tus productos.',
    icon: <PenTool className="h-10 w-10 text-blue-600" />,
  },
  {
    name: 'Impresión de Papelería de Seguridad',
    description: 'Producción de hojas valoradas, certificados y otros documentos con tintas especiales, marcas de agua y otros elementos de seguridad.',
    icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
  },
  {
    name: 'Gestión de Guías de Envío',
    description: 'Facilitamos tu logística con guías prepagadas de las principales paqueterías, optimizando tus tiempos y costos de envío a nivel nacional.',
    icon: <Truck className="h-10 w-10 text-blue-600" />,
  },
];

export default function ServiciosPage() {
  return (
    <div className="bg-white">
      {/* Sección 1: Encabezado */}
      <header className="relative bg-gray-900 text-white py-20 md:py-28">
        <Image
          src="/servicios.jpeg" // <-- CAMBIAR: Imagen de fondo
          alt="Servicios profesionales de Datapad"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Nuestros Servicios</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Soluciones integrales diseñadas para proteger, autenticar y optimizar la operación de tu negocio.
          </p>
        </div>
      </header>

      {/* Sección 2: Listado de Servicios */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => (
              <div key={service.name} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="mb-5">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-3 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 3: Nuestro Proceso */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Nuestro Proceso Simplificado</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Trabajar con nosotros es fácil, rápido y seguro.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start">
              <MessageCircle className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">1. Consulta y Asesoría</h3>
                <p className="mt-1 text-gray-600">Escuchamos tus necesidades y te proponemos la solución más efectiva.</p>
              </div>
            </div>
            <div className="flex items-start">
              <DraftingCompass className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">2. Diseño y Producción</h3>
                <p className="mt-1 text-gray-600">Desarrollamos y fabricamos tus productos con los más altos estándares de calidad.</p>
              </div>
            </div>
            <div className="flex items-start">
              <PackageCheck className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">3. Entrega y Soporte</h3>
                <p className="mt-1 text-gray-600">Enviamos tu pedido de forma segura y te damos seguimiento post-venta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Llamada a la Acción */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-6 text-center bg-gray-50 p-10 rounded-lg">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-xl mx-auto">
            Permítenos asesorarte. Contáctanos hoy mismo para obtener una cotización sin compromiso.
          </p>
          <div className="mt-8">
            <Link
              href="/contacto"
              className="inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Iniciar un Proyecto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}