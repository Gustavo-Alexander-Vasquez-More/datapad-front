'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function ProductSearch({ categories }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Inicializar el estado de búsqueda desde los parámetros de la URL
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    
    // Siempre que se realiza una nueva búsqueda o filtro, volvemos a la página 1
    params.set('page', '1');

    if (searchQuery.trim() !== '') {
      params.set('q', searchQuery.trim());
      // Nota: La API de DummyJSON prioriza la búsqueda sobre la categoría cuando usamos el endpoint /search
      // Por ende, si hay búsqueda, la categoría se podría ignorar a nivel de API, pero la mandamos a la URL.
    } else {
      params.delete('q');
    }

    if (selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    } else {
      params.delete('category');
    }

    // Actualizamos la URL (Next.js automáticamente interceptará esto y hará fetching de servidor en el Edge)
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border">
      {/* Input de Búsqueda */}
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Buscar productos por nombre..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-shadow"
        />
        <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
      </div>

      {/* Select de Categorías */}
      <div className="md:w-64">
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            // Opcional: auto-submit al cambiar categoría
          }}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white appearance-none cursor-pointer"
        >
          <option value="all">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat.slug || cat} value={cat.slug || cat}>
              {cat.name || cat}
            </option>
          ))}
        </select>
      </div>

      {/* Botón Submit */}
      <button 
        type="submit"
        className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
      >
        Buscar
      </button>
    </form>
  );
}