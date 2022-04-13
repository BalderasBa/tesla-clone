import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import eng from "./assets/translations/en.json";
import arb from "./assets/translations/ar.json";
import frn from "./assets/translations/fr.json";

// the translations
const resources = {
  en: {
    translation: eng,
  },
  ar: {
    translation: arb,
  },
  fr: {
    translation: frn,
  },
};

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources, // fallback language is english.
    lng: "en",
    fallbackLng: "en",

    detection: {
      checkWhitelist: true, // options for language detection
    },
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
