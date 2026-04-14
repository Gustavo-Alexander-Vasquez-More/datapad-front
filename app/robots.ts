import { MetadataRoute } from 'next'

// ESTO ES LO QUE FALTA:
export const dynamic = 'force-static'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://datapad.xvalsites.xyz/sitemap.xml',
  }
}