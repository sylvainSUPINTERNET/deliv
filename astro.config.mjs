import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), auth(), react(), icon()],
  output: "server",
  adapter: cloudflare()
});