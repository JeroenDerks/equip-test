import "@/styles/globals.css";
import type { AppProps } from "next/app";

import commonNL from "../locales/nl.json";
import commonEN from "../locales/en.json";
import I18nProvider from "next-translate/I18nProvider";
import { i18nConfig } from "../../i18n";
import { useRouter } from "next/router";
import { LanguageWrapper } from "@/lib/languageWrapper";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const lang = i18nConfig.locales.includes(router.query.locale as string)
    ? String(router.query.locale)
    : i18nConfig.defaultLocale;

  return (
    <I18nProvider
      {...{ lang }}
      namespaces={{ common: lang === "nl" ? commonNL : commonEN }}
    >
      <LanguageWrapper>
        <Component {...pageProps} />
      </LanguageWrapper>
    </I18nProvider>
  );
}
