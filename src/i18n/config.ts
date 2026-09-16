import en from "./en.json";

export const translations = {
  en,
};

export type Locale = keyof typeof translations;

export function t(key: string, locale: Locale = "en"): string {
  return (translations[locale] as Record<string, string>)[key] ?? key;
}
