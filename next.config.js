/** @type {import('next').NextConfig} */

// STATIC_EXPORT=true  -> tamamen statik site üretir (publish dir: "out")
//                        Render "Static Site", Netlify, GitHub Pages, vb. için.
// (boş)               -> "standalone" Node sunucusu üretir (Docker / Render Web Service için).
const isStatic = process.env.STATIC_EXPORT === "true";

const nextConfig = {
  output: isStatic ? "export" : "standalone",
  reactStrictMode: true,
  // Her sayfayı klasör/index.html olarak üretir (örn. hizmetler/index.html).
  // Statik host'larda (Render, GitHub Pages) "Not Found" hatasını önler.
  trailingSlash: true,
  // Statik export'ta Next/Image optimizasyon sunucusu olmadığı için kapatılır.
  images: { unoptimized: true },
};

module.exports = nextConfig;
