import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';

i18n
  .use(initReactI18next) // initializes react-i18next
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // if the language isn't found, fall back to English
    interpolation: {
      escapeValue: false, // React already escapes values, no need to escape
    },
  });

export default i18n;