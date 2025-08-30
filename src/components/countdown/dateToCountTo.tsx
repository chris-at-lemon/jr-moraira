"use client";

import { nunito } from "@/app/fonts";
import { useLanguageContext } from "@/context/languageContext";

const DateToCountTo = () => {
  const { language } = useLanguageContext();

  const targetDate = new Date("2025-10-03T13:00:00.000Z");
  const now = new Date();

  if (now >= targetDate) return null;

  return (
    <div className={`${nunito.className} text-xl font-medium text-neutral-600`}>
      {language === "de" && "am 03.10.2025"}
      {language === "en" && "on 03/10/2025"}
      {language === "fr" && "le 03/10/2025"}
    </div>
  );
};

export default DateToCountTo;
