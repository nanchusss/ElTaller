// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationES from "./locales/es/translation.json";
import translationCA from "./locales/ca/translation.json";

const resources = {
  es: {
    translation: translationES,
  },
  ca: {
    translation: translationCA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // idioma por defecto
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
