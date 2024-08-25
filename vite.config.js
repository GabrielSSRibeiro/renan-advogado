import { defineConfig } from "vite";
import compression from "vite-plugin-compression";
import sitemap from "vite-plugin-sitemap";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    sitemap({
      // hostname: 'https://www.yourwebsite.com',  // Replace with your site's URL
      routes: ["/", "/#features", "/#hero", "/#faq", "/#footer"],
    }),
    compression({
      algorithm: "gzip", // You can also use 'brotliCompress'
      threshold: 1024, // Compress files larger than 1 KB
    }),
  ],
});
