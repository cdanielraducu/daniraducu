import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "ro"],
  namespaces: ["common"],
  defaultNamespace: "common",
  i18nextServer: {
    debug: false,
  },
  i18nextServerPlugins: {
    fsBackend: {
      loadPath: "./src/locales/{{lng}}/{{ns}}.json",
    },
  },
  i18nextClient: {
    debug: false,
  },
  i18nextClientPlugins: {
    httpBackend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  },
};

export default config;