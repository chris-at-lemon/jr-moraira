"use client";

import { useLanguageContext } from "@/context/languageContext";

const LanguageToggle = () => {
  const { language, handleLanguage } = useLanguageContext();

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => handleLanguage("de")}
        className={`text-sm ${
          language === "de" ? "text-blue-300" : "text-neutral-600"
        }`}
      >
        DE
      </button>
      <button
        onClick={() => handleLanguage("en")}
        className={`text-sm ${
          language === "en" ? "text-blue-300" : "text-neutral-600"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguage("fr")}
        className={`text-sm ${
          language === "fr" ? "text-blue-300" : "text-neutral-600"
        }`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageToggle;
