"use client";

import { useLanguageContext } from "@/context/languageContext";

import { cardo, nunito } from "@/app/fonts";

import Countdown from "react-countdown";
import { calcTimeDelta } from "react-countdown";

interface Renderer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const Completionist = () => <span>You are good to go!</span>;

const CountDown = () => {
  const { language } = useLanguageContext();

  const calculateTimeDelta = () => {
    const timeDelta = calcTimeDelta("2025-10-03T14:00:00.000Z");
    return timeDelta;
  };

  const renderer = ({ days, hours, minutes, seconds, completed }: Renderer) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex justify-center space-x-4">
          <div className="flex flex-col items-center">
            <div
              className={`${cardo.className} text-2xl font-bold text-blue-300 md:text-4xl`}
            >
              {days}
            </div>
            <div
              className={`${nunito.className} -mt-1 text-sm text-neutral-500 md:text-lg`}
            >
              {language === "en" && "days"}
              {language === "fr" && "jours"}
              {language === "de" && "Tage"}
            </div>
          </div>
          <div>:</div>
          <div className="flex flex-col items-center">
            <div
              className={`${cardo.className} text-2xl font-bold text-blue-300 md:text-4xl`}
            >
              {hours}
            </div>
            <div
              className={`${nunito.className} -mt-1 text-sm text-neutral-500 md:text-lg`}
            >
              {language === "en" && "hours"}
              {language === "fr" && "heures"}
              {language === "de" && "Stunden"}
            </div>
          </div>
          <div>:</div>

          <div className="flex flex-col items-center">
            <div
              className={`${cardo.className} text-2xl font-bold text-blue-300 md:text-4xl`}
            >
              {minutes}
            </div>
            <div
              className={`${nunito.className} -mt-1 text-sm text-neutral-500 md:text-lg`}
            >
              {language === "en" && "mins"}
              {language === "fr" && "minutes"}
              {language === "de" && "Minuten"}
            </div>
          </div>
          <div>:</div>

          <div className="flex flex-col items-center">
            <div
              className={`${cardo.className} text-2xl font-bold text-blue-300 md:text-4xl`}
            >
              {seconds}
            </div>
            <div
              className={`${nunito.className} -mt-1 text-sm text-neutral-500 md:text-lg`}
            >
              {language === "en" && "secs"}
              {language === "fr" && "secondes"}
              {language === "de" && "Sekunden"}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <Countdown
      date={Date.now() + calculateTimeDelta().total}
      renderer={renderer}
    />
  );
};

export default CountDown;
