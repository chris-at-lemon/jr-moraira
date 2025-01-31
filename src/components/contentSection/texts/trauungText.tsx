import { nunito } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faArrowAltCircleDown,
} from "@fortawesome/free-regular-svg-icons";

type Props = {
  language: "en" | "fr" | "de";
};

const TrauungText = ({ language }: Props) => {
  if (language === "de") {
    return (
      <div className={`${nunito} flex flex-col items-center md:block`}>
        <div className="text-2xl font-bold">Wann?</div>
        <hr className="mt-2 h-0.5 w-48 bg-blue-400" />

        <div>
          <div className="mt-8 flex items-center">
            <div className="text-2xl">
              <FontAwesomeIcon icon={faCalendar} className="text-blue-400" />
            </div>
            <div className="ml-4 mt-[1px]">03 Oktober 2024</div>
          </div>

          <div className="mt-2 flex items-center">
            <div className="text-2xl">
              <FontAwesomeIcon icon={faClock} className="text-blue-400" />
            </div>
            <div className="ml-4 mt-[1px]">Ab 15:30 Uhr</div>
          </div>
        </div>

        <h3 className="mt-16 text-2xl font-bold">Wo?</h3>
        <hr className="mt-2 h-0.5 w-48 bg-blue-400" />

        <div className="mt-8">
          <div className="font-semibold">Oceana</div>
          <div>Avenida La Marina n°333</div>
          <div>Les Basetes,</div>
          <div>03720 Benissa </div>
          <div className="mt-4 text-2xl">
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              className="text-blue-400"
            />
          </div>
        </div>
      </div>
    );
  }

  if (language === "fr") {
    return (
      <div className={`${nunito} flex flex-col items-center md:block`}>
        <div className="text-2xl font-bold">Quand?</div>
        <hr className="mt-2 h-0.5 w-48 bg-blue-400" />

        <div>
          <div className="mt-8 flex items-center">
            <div className="text-2xl">
              <FontAwesomeIcon icon={faCalendar} className="text-blue-400" />
            </div>
            <div className="ml-4 mt-[1px]">03 Octobre 2024</div>
          </div>

          <div className="mt-2 flex items-center">
            <div className="text-2xl">
              <FontAwesomeIcon icon={faClock} className="text-blue-400" />
            </div>
            <div className="ml-4 mt-[1px]">À partir de 15h30</div>
          </div>
        </div>

        <h3 className="mt-16 text-2xl font-bold">Où?</h3>
        <hr className="mt-2 h-0.5 w-48 bg-blue-400" />

        <div className="mt-8">
          <div className="font-semibold">Oceana</div>
          <div>Avenida La Marina n°333</div>
          <div>Les Basetes,</div>
          <div>03720 Benissa </div>
          <div className="mt-4 text-2xl">
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              className="text-blue-400"
            />
          </div>
        </div>
      </div>
    );
  }

  if (language === "en") {
    return (
      <div className={`${nunito} flex flex-col items-center md:block`}>
        <div className="text-2xl font-bold">When?</div>
        <hr className="mt-2 h-0.5 w-48 bg-blue-400" />

        <div>
          <div className="mt-8 flex items-center">
            <div className="text-2xl">
              <FontAwesomeIcon icon={faCalendar} className="text-blue-400" />
            </div>
            <div className="ml-4 mt-[1px]">03 October 2024</div>
          </div>

          <div className="mt-2 flex items-center">
            <div className="text-2xl">
              <FontAwesomeIcon icon={faClock} className="text-blue-400" />
            </div>
            <div className="ml-4 mt-[1px]">From 3:30 pm</div>
          </div>
        </div>

        <h3 className="mt-16 text-2xl font-bold">Where?</h3>
        <hr className="mt-2 h-0.5 w-48 bg-blue-400" />

        <div className="mt-8">
          <div className="font-semibold">Oceana</div>
          <div>Avenida La Marina n°333</div>
          <div>Les Basetes,</div>
          <div>03720 Benissa </div>
          <div className="mt-4 text-2xl">
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              className="text-blue-400"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default TrauungText;
