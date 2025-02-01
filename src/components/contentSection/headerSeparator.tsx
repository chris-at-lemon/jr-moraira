"use client";

import { cardo } from "@/app/fonts";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useLanguageContext } from "@/context/languageContext";

type Props = {
  section: string;
  quotes: boolean;
};

const HeaderSeparator = ({ section, quotes }: Props) => {
  const { language } = useLanguageContext();

  return (
    <div
      className={`px-4 py-12 text-4xl md:px-0 md:py-16 ${cardo.className} flex items-center justify-center text-center text-blue-300`}
    >
      {quotes && <FontAwesomeIcon icon={faQuoteLeft} className="-mt-4 mr-4" />}

      {section === "crazies" &&
        (language === "en"
          ? "Who says crazies don't find each other?"
          : language === "fr"
            ? "Qui dit que les fous ne se trouvent pas?"
            : language === "de"
              ? "Wer sagt, dass Verrückte nicht zueinander finden?"
              : null)}

      {section === "probezeit" &&
        (language === "en"
          ? " The probation period doesn't have to be a bad thing"
          : language === "fr"
            ? " La période d'essai ne doit pas être une mauvaise chose"
            : language === "de"
              ? "Die Probezeit muss ja keine schlechte Sache sein"
              : null)}

      {section === "trauung" &&
        (language === "en"
          ? "The wedding"
          : language === "fr"
            ? "Le mariage"
            : language === "de"
              ? "Die Trauung"
              : null)}

      {section === "tagesablauf" &&
        (language === "en"
          ? "The day's program"
          : language === "fr"
            ? "Le programme de la journée"
            : language === "de"
              ? "Der Tagesablauf"
              : null)}

      {section === "location" &&
        (language === "en"
          ? "Location"
          : language === "fr"
            ? "Emplacement"
            : language === "de"
              ? "Location"
              : null)}

      {quotes && <FontAwesomeIcon icon={faQuoteRight} className="ml-4 mt-4" />}
    </div>
  );
};

export default HeaderSeparator;
