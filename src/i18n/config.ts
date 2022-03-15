import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation_ru from "./ru/translation.json";
import translation_en from "./en/translation.json";

const resources = {
  ru: {
    translation_ru
  },
  en: {
    translation_en
  }
};

i18n.use(initReactI18next).init({
  lng: "ru",
  fallbackNS: ["translation_ru", "translation_en"],
  resources
});

export default i18n;
