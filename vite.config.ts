import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import viteCompression from "vite-plugin-compression"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({
      verbose: true,          // Log compressed files
      disable: false,         // Enable compression in production
      threshold: 10240,       // Compress files > 10KB
      algorithm: "gzip",      // Compression type
      ext: ".gz",             // Output file extension
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 9999, // Very high limit (effectively disables warnings)
    rollupOptions: {
      onwarn(warning, warn) {
        // 🔇 Completely silence chunk size warnings
        if (warning.code === "CHUNK_SIZE") return
        warn(warning)
      },
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react", "react-icons"],
          lottie: ["@lottiefiles/dotlottie-react"],
        },
      },
    },
  },
})
