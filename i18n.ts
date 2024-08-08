import { I18nConfig } from "next-translate";

export const i18nConfig = {
  locales: ["en", "nl"],
  defaultLocale: "en",
  loader: false,
  pages: {
    "*": ["common"],
  },
  defaultNS: "common",
} satisfies I18nConfig;
