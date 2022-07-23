import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import fa from 'locales/fa'
import en from 'locales/en'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ['fa', 'en'],
    resources: {
      fa,
      en,
    },
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain', 'navigator'],
      caches: ['cookie'],
    },
  })

export default i18n
