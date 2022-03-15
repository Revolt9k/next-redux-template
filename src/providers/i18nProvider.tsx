import React from "react";
import i18n from "../i18n/config";
import { I18nextProvider } from "react-i18next";

export const getTranslation = (code: string): string => {
  const { t } = i18n;
  return t(code);
};

export const changeLanguage = (lang: "ru" | "en" | "ch"): void => {
  i18n.changeLanguage(lang);

  console.log(lang);
  console.log("i18n.language", i18n.language);
};

const I18nProvider: React.FC = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
