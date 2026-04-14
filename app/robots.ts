import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Ejemplo: si tuvieras una carpeta privada
    },
    sitemap: 'https://datapad.xvalsites.xyz/sitemap.xml', // <-- CAMBIAR: URL de tu sitio
  }
}