import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// Import translations
import translationDE from "./locales/de/translation.json";
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  de: {
    translation: translationDE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
    // Disables escaping since React already handles it, preventing Cross-Site Scripting (XSS) attacks.
  },
});

export default i18n;
