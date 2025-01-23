import { type Locale, i18n } from "@/i18n-config";

const SCRIPTS = {
  as: "bn",
  bho: "dev",
  bn: "bn",
  doi: "dev",
  gom: "dev",
  gu: "gu",
  hi: "dev",
  kn: "kn",
  lus: "en",
  mai: "dev",
  ml: "ml",
  mr: "mr",
  ne: "ne",
  or: "or",
  pa: "gur",
  sd: "arb",
  ta: "ta",
  te: "te",
  ur: "arb",
};
export const getScript = (lang: Locale["code"]): string => SCRIPTS[lang];

export const getLocale = (lang?: string): Locale["code"] => {
  if (!lang) return "hi";
  return i18n.locales.find((loc) => loc["code"] === lang)
    ? (lang as Locale["code"])
    : "hi";
};
