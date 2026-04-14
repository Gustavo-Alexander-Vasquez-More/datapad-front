import React from 'react'
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import ValueProposition from './components/ValueProposition';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <ValueProposition />
      <Testimonials />
      <CTA />
    </div>
  )
}

export const metadata = {
  title: 'Datapad | Soluciones en Papelería de Seguridad y Hologramas en México',
  description: 'Líderes en papelería de seguridad, hologramas personalizados, hojas valoradas y soluciones de logística. Protegemos el valor de tus documentos.',
  
  // Metadata de Open Graph (para redes sociales)
  openGraph: {
    title: 'Datapad | Seguridad Documental y Logística',
    description: 'Descubre nuestras soluciones en papelería de seguridad, hologramas y más. Calidad y confianza para tu empresa.',
    url: 'https://datapad.xvalsites.xyz', // <-- CAMBIAR: URL completa de tu sitio
    siteName: 'Datapad',
    images: [
      {
        url: 'https://datapad.xvalsites.xyz/og-inicio.jpg', // <-- CAMBIAR: Imagen principal para compartir
        width: 1200,
        height: 630,
        alt: 'Logo de Datapad sobre fondo profesional',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },

  // Metadata para Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Datapad | Soluciones en Papelería de Seguridad y Hologramas en México',
    description: 'Líderes en papelería de seguridad, hologramas personalizados y más. Protegemos el valor de tus documentos.',
    images: ['https://datapad.xvalsites.xyz/og-inicio.jpg'], // <-- CAMBIAR: Misma imagen que Open Graph
  },
};

