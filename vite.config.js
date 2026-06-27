import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração principal do Vite para o projeto React.
export default defineConfig({
  // Plugin necessário para interpretar componentes React.
  plugins: [react()],
  server: {
    watch: {
      // Pastas ignoradas para evitar processamento desnecessário.
      ignored: ["**/.tmp/**", "**/.tools/**", "**/dist/**"],
    },
  },
});
