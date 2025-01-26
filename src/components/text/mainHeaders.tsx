"use client";

import { cardo, nunito } from "@/app/fonts";
import { useLanguageContext } from "@/context/languageContext";

const MainHeaders = () => {
  const { language } = useLanguageContext();

  return (
    <>
      <h2
        className={`block text-xl font-medium md:text-4xl ${nunito.className} text-center text-neutral-600`}
      >
        {language === "en" && "We are getting married"}
        {language === "fr" && "Nous nous marions"}
        {language === "de" && "Wir heiraten"}
      </h2>
      <h1
        className={`mt-4 text-4xl font-bold md:mt-12 md:text-8xl ${cardo.className} text-center text-blue-300`}
      >
        Reykja &amp; John
      </h1>
    </>
  );
};

export default MainHeaders;
