import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Users, Building } from 'lucide-react';

export const runtime = 'edge';

export default function NosotrosPage() {
  return (
    <div className="bg-white">
      {/* Sección 1: Encabezado Principal */}
      <header className="relative bg-gray-900 text-white py-20 md:py-28">
        <Image
          src="/nosotros.jpg" // <-- CAMBIAR: Imagen de fondo representativa
          alt="Equipo de Datapad trabajando"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Nuestra Historia</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Más que un proveedor, somos el socio estratégico que garantiza la integridad y seguridad de la documentación de tu empresa.
          </p>
        </div>
      </header>

      {/* Sección 2: Misión y Visión */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-x-3">
                <Target className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-semibold">Nuestra Misión</h2>
              </div>
              <p className="mt-3 text-gray-600">
                Proveer al mercado mexicano soluciones de papelería de alta seguridad y logística con los más altos estándares de calidad, protegiendo el valor y la autenticidad de los documentos de nuestros clientes.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-x-3">
                <Eye className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-semibold">Nuestra Visión</h2>
              </div>
              <p className="mt-3 text-gray-600">
                Ser la empresa líder y de mayor confianza en México en soluciones de seguridad documental, innovando constantemente para adaptarnos a las nuevas amenazas y necesidades del mercado.
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/imprenta.avif" // <-- CAMBIAR: Imagen de oficina o equipo
              alt="Oficina de Datapad"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Sección 3: Valores de la Empresa */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Nuestros Valores</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold">Integridad</h3>
              <p className="mt-2 text-gray-600">Actuamos con honestidad y transparencia en cada interacción.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Calidad</h3>
              <p className="mt-2 text-gray-600">Compromiso total con la excelencia de nuestros productos y servicios.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Confianza</h3>
              <p className="mt-2 text-gray-600">Construimos relaciones a largo plazo basadas en la seguridad que ofrecemos.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Innovación</h3>
              <p className="mt-2 text-gray-600">Buscamos constantemente nuevas y mejores formas de proteger a nuestros clientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Llamada a la Acción */}
      <section className="bg-blue-600">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Únete a las empresas que confían en Datapad
          </h2>
          <p className="mt-4 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
            Descubre cómo nuestras soluciones pueden fortalecer la seguridad de tu operación.
          </p>
          <div className="mt-10">
            <Link
              href="/contacto"
              className="rounded-md bg-white px-5 py-3 text-base font-semibold text-blue-700 shadow-sm hover:bg-gray-100"
            >
              Solicita una Asesoría
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Sobre Nosotros | Datapad',
  description: 'Conoce la historia, misión y valores de Datapad, tu socio estratégico en soluciones de seguridad documental en México. Calidad, confianza e innovación.',
  
  // Metadata de Open Graph (para redes sociales)
  openGraph: {
    title: 'Sobre Nosotros | Datapad',
    description: 'Descubre por qué somos líderes en seguridad documental en México.',
    url: 'https://datapad.xvalsites.xyz/nosotros', // <-- CAMBIAR: URL completa de tu sitio
    siteName: 'Datapad',
    images: ['https://datapad.xvalsites.xyz/og-nosotros.jpg'],
    locale: 'es_MX',
    type: 'website',
  },
};