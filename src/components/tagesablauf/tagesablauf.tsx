"use client";

import Image from "next/image";
import { nunito } from "@/app/fonts";

import { useLanguageContext } from "@/context/languageContext";

import weddingRings from "../../../public/icons/weddingRings.svg";
import arch from "../../../public/icons/arch.svg";
import champagne from "../../../public/icons/champagne.svg";
import weddingCar from "../../../public/icons/weddingCar.svg";
import cake from "../../../public/icons/cake.svg";
import dinner from "../../../public/icons/romantic-dinner.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";

const Tagesablauf = () => {
  const { language } = useLanguageContext();

  return (
    <div className="mx-auto w-96">
      <div className={`flex items-stretch justify-center ${nunito.className}`}>
        <div className="flex flex-grow basis-1/3 flex-col items-center justify-center px-4 text-center">
          <Image priority src={arch} alt="arch" style={{ maxHeight: "3rem" }} />
          <div className="mt-4 text-xl font-semibold">
            {language === "de" && "14:00 Uhr"}
            {language === "fr" && "14h00"}
            {language === "en" && "2:00 PM"}
          </div>
          <div>
            {language === "de" && "Ankunft"}
            {language === "fr" && "Arrivée"}
            {language === "en" && "Arrival"}
          </div>
        </div>
        <div className="basis-0.5 bg-blue-400"></div>
        <div className="flex-grow basis-1/3"></div>
      </div>

      <div
        className={`mt-4 flex items-stretch justify-center ${nunito.className}`}
      >
        <div className="flex flex-grow basis-1/3 flex-col items-center justify-center"></div>
        <div className="basis-0.5 bg-blue-400"></div>
        <div className="flex flex-grow basis-1/3 flex-col items-center justify-center px-4 text-center">
          <Image
            priority
            src={weddingRings}
            alt="wedding rings"
            style={{ maxHeight: "3rem" }}
          />
          <div className="mt-4 text-xl font-semibold">
            {language === "de" && "14:30 Uhr"}
            {language === "fr" && "14h30"}
            {language === "en" && "2:30 PM"}
          </div>
          <div>
            {language === "de" && "Trauung"}
            {language === "fr" && "Cérémonie"}
            {language === "en" && "Ceremony"}
          </div>
        </div>
      </div>

      <div
        className={`flex items-stretch justify-center ${nunito.className} mt-4`}
      >
        <div className="flex flex-grow basis-1/3 flex-col items-center justify-center px-4 text-center">
          <Image
            priority
            src={champagne}
            alt="champagne"
            style={{ maxHeight: "3rem" }}
          />
          <div className="mt-4 text-xl font-semibold">
            {language === "de" && "15:15 Uhr"}
            {language === "fr" && "15:15"}
            {language === "en" && "3:15 PM"}
          </div>
          <div>
            {language === "de" && "Sektempfang vor Ort"}
            {language === "fr" && "Réception sur place"}
            {language === "en" && "Champagne reception"}
          </div>
        </div>
        <div className="basis-0.5 bg-blue-400"></div>
        <div className="flex-grow basis-1/3"></div>
      </div>

      <div
        className={`mt-4 flex items-stretch justify-center ${nunito.className}`}
      >
        <div className="flex flex-grow basis-1/3 flex-col items-center justify-center"></div>
        <div className="basis-0.5 bg-blue-400"></div>
        <div className="flex flex-grow basis-1/3 flex-col items-center justify-center px-4 text-center">
          <Image
            priority
            src={weddingCar}
            alt="wedding rings"
            style={{ maxHeight: "3rem" }}
          />
          <div className="mt-4 text-xl font-semibold">
            {language === "de" && "16:00 Uhr"}
            {language === "fr" && "16:00"}
            {language === "en" && "4:00 PM"}
          </div>
          <div>
            {language === "de" && "Bustransfer zum Oceana"}
            {language === "fr" && "Transfert en bus vers l'Oceana"}
            {language === "en" && "Bus transfer to Oceana"}
          </div>
        </div>
      </div>

      <div
        className={`mt-2 flex items-stretch justify-center ${nunito.className}`}
      >
        <div className="flex flex-grow basis-1/3 flex-col items-center justify-center p-4 text-center">
          <Image priority src={cake} alt="arch" style={{ maxHeight: "3rem" }} />
          <div className="mt-4 text-xl font-semibold">
            {language === "de" && "16:45 Uhr"}
            {language === "fr" && "16:45"}
            {language === "en" && "4:45 PM"}
          </div>
          <div>
            {language === "de" && "Eintreffen an der Location"}
            {language === "fr" && "Arrivée sur le lieu"}
            {language === "en" && "Arrival at the location"}
          </div>
        </div>
        <div className="basis-0.5 bg-blue-400"></div>
        <div className="flex-grow basis-1/3"></div>
      </div>

      <div
        className={`mt-4 flex items-stretch justify-center ${nunito.className}`}
      >
        <div className="flex flex-grow basis-1/3 flex-col items-center justify-center"></div>
        <div className="basis-0.5 bg-blue-400"></div>
        <div className="flex flex-grow basis-1/3 flex-col items-center justify-center px-4 text-center">
          <Image
            priority
            src={dinner}
            alt="wedding rings"
            style={{ maxHeight: "3rem" }}
          />
          <div className="mt-4 text-xl font-semibold">
            {language === "de" && "18:00 Uhr"}
            {language === "fr" && "18:00"}
            {language === "en" && "6:00 PM"}
          </div>
          <div>
            {language === "de" && "Dinner"}
            {language === "fr" && "Dîner"}
            {language === "en" && "Dinner"}
          </div>
          <div className="mt-4 text-2xl">
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              className="text-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tagesablauf;
