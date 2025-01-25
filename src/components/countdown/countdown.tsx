"use client";

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
              className={`${cardo.className} text-2xl md:text-4xl font-bold text-blue-300`}
            >
              {days}
            </div>
            <div
              className={`${nunito.className} text-sm md:text-lg text-neutral-500 -mt-1`}
            >
              days
            </div>
          </div>
          <div>:</div>
          <div className="flex flex-col items-center">
            <div
              className={`${cardo.className} text-2xl md:text-4xl font-bold text-blue-300`}
            >
              {hours}{" "}
            </div>
            <div
              className={`${nunito.className} text-sm md:text-lg text-neutral-500 -mt-1`}
            >
              hours
            </div>
          </div>
          <div>:</div>

          <div className="flex flex-col items-center">
            <div
              className={`${cardo.className} text-2xl md:text-4xl font-bold text-blue-300`}
            >
              {minutes}
            </div>
            <div
              className={`${nunito.className} text-sm md:text-lg text-neutral-500 -mt-1`}
            >
              {" "}
              mins
            </div>
          </div>
          <div>:</div>

          <div className="flex flex-col items-center">
            <div
              className={`${cardo.className} text-2xl md:text-4xl font-bold text-blue-300`}
            >
              {" "}
              {seconds}
            </div>
            <div
              className={`${nunito.className} text-sm md:text-lg text-neutral-500 -mt-1`}
            >
              secs
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
