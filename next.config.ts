import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // <-- COMENTAMOS ESTO: Ya no podemos usar exportación estática si vamos a correr en el Edge
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
