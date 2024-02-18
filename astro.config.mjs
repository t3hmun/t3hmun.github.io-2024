import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import { remarkDarkLightShiki } from "./src/remark/remarkDarkLightShiki";

// https://astro.build/config
export default defineConfig({
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  site: "https://t3hmun.github.io",
  markdown: {
    remarkPlugins: [remarkDarkLightShiki],
    syntaxHighlight: false,
  },
  integrations: [tailwind(), preact(), mdx()],
});
