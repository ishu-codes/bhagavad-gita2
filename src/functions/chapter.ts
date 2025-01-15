import { i18n, Locale } from "@/i18n-config";

export const getLocale = (lang?: string): Locale["code"] => {
  if (!lang) return "hi";
  return i18n.locales.find((loc) => loc["code"] === lang)
    ? (lang as Locale["code"])
    : "hi";
};
