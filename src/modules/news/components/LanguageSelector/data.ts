import { SupportedLanguages } from "../../../../redux/types";

const languageCodesToNames: { [key in SupportedLanguages]: string } = {
  ar: "Arabic",
  de: "German",
  en: "English",
  es: "Spanish",
  fr: "French",
  he: "Hebrew",
  it: "Italian",
  nl: "Dutch",
  no: "Norwegian",
  pt: "Portuguese",
  ru: "Russian",
  sv: "Swedish",
  zh: "Chinese",
  "": "",
};

const languageCodes: SupportedLanguages[] = [
  "ar",
  "de",
  "en",
  "es",
  "fr",
  "he",
  "it",
  "nl",
  "no",
  "pt",
  "ru",
  "sv",
  "zh",
];

export const languageOptions = languageCodes.map((code) => ({
  value: code,
  label: languageCodesToNames[code],
}));
