import { languageDetector } from "@/lib/languageDetector";
import { useRouter } from "next/router";
import Link from "next/link";

interface LanguageSwitcherProps {
  locale: string;
  href?: string;
  asPath?: string;
}

export const LanguageSwitcher = ({
  locale,
  ...rest
}: LanguageSwitcherProps) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, String(router.query[k]));
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  return (
    <Link
      href={href}
      onClick={() =>
        languageDetector.cache ? languageDetector.cache(locale) : {}
      }
    >
      <button style={{ fontSize: "small" }}>{locale}</button>
    </Link>
  );
};
