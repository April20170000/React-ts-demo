import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './nls/resources'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: navigator.language.toLowerCase().slice(0, 2),
    debug: true,
    resources: resources,
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;