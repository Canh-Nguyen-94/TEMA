import { defineConfig, loadEnv } from "vite";
import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import tailwindcss from "@tailwindcss/vite";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { alias } from "./configs/paths.config";

export default ({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  return defineConfig({
    root,
    base: "/",
    publicDir: "public",
    define: {
      "process.env": env,
    },
    plugins: [
      vue(),
      tailwindcss(),
      autoprefixer(),
      VueI18nPlugin({
        include: resolve(
          dirname(fileURLToPath(import.meta.url)),
          "./src/assets/locales/**"
        ),
        fullInstall: false,
        compositionOnly: true,
      }),
    ],
    server: {
      port: Number(env.VITE_PORT),
    },
    resolve: { alias },
    esbuild: {},
    build: {},
  });
};
