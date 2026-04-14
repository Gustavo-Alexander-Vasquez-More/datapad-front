import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductSearch from '../components/ProductSearch';
import { SearchX } from 'lucide-react'; // Icono adicional para cuando no hay resultados

// Le indicamos a Next.js que esta página específica debe ejecutarse en el Edge Runtime de Cloudflare
export const runtime = 'edge';

export default async function ProductosPage({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params?.page || '1');
  const q = params?.q || ''; // Búsqueda de producto
  const category = params?.category || 'all'; // Categoría seleccionada
  
  const limit = 12; // Productos por página
  const skip = (page - 1) * limit;

  // 1. Obtener la lista de categorías para el filtro
  const catRes = await fetch('https://dummyjson.com/products/categories', { cache: 'force-cache' }); // force-cache porque rara vez cambian
  const categories = await catRes.json();

  // 2. Construir la URL de la API base dependiendo de si hay búsqueda o si hay categoría
  // Nota: DummyJSON no permite combinar "search?q=" y "category/nombre" nativamente en una sola llamada en su API pública,
  // por lo que si el usuario escribe algo, priorizamos la búsqueda por nombre. Si solo escoge categoría, buscamos por categoría.
  let url = 'https://dummyjson.com/products';

  if (q.trim()) {
    // Si hay texto escrito, usamos el endpoint de búsqueda
    url = `https://dummyjson.com/products/search?q=${encodeURIComponent(q.trim())}`;
  } else if (category !== 'all') {
    // Si hay una categoría seleccionada y no hay búsqueda de texto
    url = `https://dummyjson.com/products/category/${encodeURIComponent(category)}`;
  }

  // Agregamos paginación
  url += (url.includes('?') ? '&' : '?') + `limit=${limit}&skip=${skip}`;

  // Consumimos la lista principal (productos filtrados o buscados) en tiempo real en el Edge
  const res = await fetch(url, { cache: 'no-store' });
  const data = await res.json();
  const products = data.products || [];
  
  // Total de páginas basado en el total de resultados para est búsqueda/filtro
  const totalPages = Math.ceil(data.total / limit) || 1; 

  // Función auxiliar para mantener los otros parámetros de búsqueda en la URL al paginar
  const getPaginationLink = (targetPage) => {
    const newParams = new URLSearchParams();
    if (q) newParams.set('q', q);
    if (category !== 'all') newParams.set('category', category);
    newParams.set('page', targetPage.toString());
    return `/productos?${newParams.toString()}`;
  };

  return (
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Catálogo Dinámico</h1>
          <p className="text-lg text-gray-600">
            Renderizado en el <strong>Edge Runtime</strong> en tiempo real con <strong>filtros</strong> y <strong>búsqueda</strong>.
          </p>
        </div>

        {/* Componente Cliente para la Búsqueda y Filtrado */}
        <ProductSearch categories={categories} />
        
        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white relative">
                  <div className="relative w-full h-48 bg-gray-100 p-4">
                    <Image 
                      src={product.thumbnail} 
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="text-xs text-blue-600 font-semibold mb-1 uppercase tracking-wider">{product.category}</div>
                    <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1" title={product.title}>{product.title}</h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-2xl font-black text-gray-900">${product.price}</span>
                      <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full whitespace-nowrap">★ {product.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles de Paginación Mejorada para retener búsqueda */}
            <div className="flex justify-center items-center gap-6 mt-16 pb-8">
              {page > 1 ? (
                <Link 
                  href={getPaginationLink(page - 1)} 
                  className="px-6 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition"
                >
                  ← Anterior
                </Link>
              ) : (
                <div className="px-6 py-2 bg-gray-300 text-gray-500 font-medium rounded-lg cursor-not-allowed">
                  ← Anterior
                </div>
              )}
              
              <span className="text-lg font-semibold text-gray-700">
                Página {page} de {totalPages}
              </span>
              
              {page < totalPages ? (
                <Link 
                  href={getPaginationLink(page + 1)} 
                  className="px-6 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition"
                >
                  Siguiente →
                </Link>
              ) : (
                <div className="px-6 py-2 bg-gray-300 text-gray-500 font-medium rounded-lg cursor-not-allowed">
                  Siguiente →
                </div>
              )}
            </div>
          </>
        ) : (
          /* Estado Vacío */
          <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <SearchX className="h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No se encontraron productos</h3>
            <p className="text-gray-500">Prueba ajustando los filtros de búsqueda o categoría.</p>
          </div>
        )}
      </main>
  );
}