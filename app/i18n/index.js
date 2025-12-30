import en from './locales/en.json';
import ko from './locales/ko.json';

const translations = {
  en,
  ko,
};

export const defaultLocale = 'en';
export const locales = ['en', 'ko'];

export function getTranslations(locale = defaultLocale) {
  return translations[locale] || translations[defaultLocale];
}

export function t(key, locale = defaultLocale) {
  const keys = key.split('.');
  let value = translations[locale] || translations[defaultLocale];
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      return key;
    }
  }
  
  return value;
}

