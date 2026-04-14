"use client";

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    body: 'La calidad de los hologramas superó nuestras expectativas. El proceso fue rápido y el equipo de Datapad nos asesoró en todo momento. Totalmente recomendados.',
    author: {
      name: 'Lic. Sofía Hernández',
      role: 'Gerente de Operaciones',
      company: 'Logística Express',
      imageUrl: '/testimonials/sofia-hernandez.jpg',
    },
  },
  {
    body: 'Finalmente encontramos un proveedor confiable para nuestras hojas de seguridad. La atención al detalle y el profesionalismo de Datapad son inigualables en el mercado.',
    author: {
      name: 'Carlos Gutiérrez',
      role: 'Director Administrativo',
      company: 'Grupo Notarial del Valle',
      imageUrl: '/testimonials/carlos-gutierrez.jpg',
    },
  },
  {
    body: 'El servicio de asesoría fue clave para decidir qué tipo de papel de seguridad necesitábamos. Un socio estratégico invaluable.',
    author: {
      name: 'Ana Morales',
      role: 'Jefa de Compras',
      company: 'Corporativo Legal FY',
      imageUrl: '/testimonials/ana-morales.jpg',
    },
  },
  {
    body: 'Las guías de envío prepagadas han optimizado nuestra logística interna. Un ahorro de tiempo y dinero considerable.',
    author: {
      name: 'Javier Rojas',
      role: 'Encargado de Almacén',
      company: 'Distribuidora del Pacífico',
      imageUrl: '/testimonials/javier-rojas.jpg',
    },
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">La Confianza de Nuestros Clientes</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Nos enorgullece ser el socio estratégico de empresas líderes en México.
          </p>
        </div>
        
        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full min-w-0 px-4">
                  <div className="bg-gray-50 p-8 rounded-xl shadow-sm h-full flex flex-col justify-between">
                    <p className="text-gray-700 leading-7 text-lg">“{testimonial.body}”</p>
                    <div className="mt-6 flex items-center gap-x-4">
                      <Image
                        className="h-14 w-14 rounded-full bg-gray-200 object-cover"
                        src={testimonial.author.imageUrl}
                        alt={`Foto de ${testimonial.author.name}`}
                        width={56}
                        height={56}
                      />
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">{testimonial.author.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.author.role}, {testimonial.author.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -ml-4 z-10"
            aria-label="Anterior testimonio"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -mr-4 z-10"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
}