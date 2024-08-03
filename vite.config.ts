import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),

      // assets
      "@images": fileURLToPath(new URL("./src/assets/images", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/assets/styles", import.meta.url)),

      // components
      "@icons": fileURLToPath(
        new URL("./src/components/icons", import.meta.url)
      ),
      "@common": fileURLToPath(
        new URL("./src/components/common", import.meta.url)
      ),
      "@layout": fileURLToPath(
        new URL("./src/components/layout", import.meta.url)
      ),
      "@specific": fileURLToPath(
        new URL("./src/components/specific", import.meta.url)
      ),

      // features
      "@landing": fileURLToPath(
        new URL("./src/features/landing", import.meta.url)
      ),

      // src
      "@constants": fileURLToPath(new URL("./src/constants", import.meta.url)),
      "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
      "@locales": fileURLToPath(new URL("./src/locales", import.meta.url)),
      "@routes": fileURLToPath(new URL("./src/routes", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
    },
  },
});
