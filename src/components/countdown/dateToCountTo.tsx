"use client";

import { nunito } from "@/app/fonts";
import { useLanguageContext } from "@/context/languageContext";

const DateToCountTo = () => {
  const { language } = useLanguageContext();

  return (
    <div className={`${nunito.className} text-xl font-medium text-neutral-600`}>
      {language === "de" && "am 03.10.2025"}
      {language === "en" && "on 03/10/2025"}
      {language === "fr" && "le 03/10/2025"}
    </div>
  );
};

export default DateToCountTo;
