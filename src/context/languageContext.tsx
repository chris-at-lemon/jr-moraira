"use client";

import { createContext, useContext, useState } from "react";

interface LanguageContextType {
  language: "en" | "fr" | "de";
  handleLanguage: (language: "en" | "fr" | "de") => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  handleLanguage: () => {},
});

type LanguageProviderProps = {
  children: React.ReactNode;
};

export const LanguageContextProvider = ({
  children,
}: LanguageProviderProps) => {
  const [language, setLanguage] =
    useState<LanguageContextType["language"]>("de");

  const handleLanguage = (language: "en" | "fr" | "de") => {
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a FiltersBarContextProvider",
    );
  }
  return context;
}
