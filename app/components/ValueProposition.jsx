import React from 'react';
import Link from 'next/link';
import { Award, Users, Globe } from 'lucide-react';

const features = [
  {
    name: 'Calidad Superior Garantizada',
    description: 'Utilizamos solo materiales de primera para asegurar la durabilidad, seguridad y profesionalismo que tus documentos merecen.',
    icon: <Award className="h-10 w-10 text-white" />,
  },
  {
    name: 'Asesoría 100% Personalizada',
    description: 'Nuestro equipo de expertos te acompaña en cada paso para encontrar la solución de seguridad perfecta para tus necesidades.',
    icon: <Users className="h-10 w-10 text-white" />,
  },
  {
    name: 'Envíos a Nivel Nacional',
    description: 'Recibe tus productos de forma rápida y segura en cualquier parte de la República Mexicana. Tu operación no se detiene.',
    icon: <Globe className="h-10 w-10 text-white" />,
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-[#1C2939] text-white py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Comprometidos con tu Seguridad y Eficiencia</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Más que un proveedor, somos tu socio estratégico en la protección de documentos y la optimización de tu logística.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link 
            href="/nosotros"
            className="bg-white text-[#1C2939] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition duration-300"
          >
            Conoce más sobre nosotros
          </Link>
        </div>
      </div>
    </section>
  );
}
