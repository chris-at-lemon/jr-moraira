"use client";

import { useState } from "react";
import Link from "next/link";

import { nunito } from "@/app/fonts";

import { useLanguageContext } from "@/context/languageContext";

import { AccordionItem } from "./accordionItem";
import { Line } from "./line";

export const Accordion = () => {
  const { language } = useLanguageContext();

  let Data;

  const DataGerman = [
    {
      title: "Wie ist der Dresscode?",
      content: (
        <p>
          Um den festlichen Anlass gebührend zu zelebrieren, haben wir uns für
          den Dresscode{" "}
          <strong>&quot;Sommerlich elegant mit Tanzschuhen&quot;</strong>{" "}
          entschieden. Wir lieben den sommerlichen Flair und wünschen uns, dass
          ihr euch in luftig-leichten und eleganten Outfits wohl fühlt.{" "}
          <strong>
            Für den Abend würden wir euch zusätzlich ein Jäckchen empfehlen.
            Bitte checkt den Wetterbericht vor Abflug!
          </strong>
        </p>
      ),
    },
    {
      title: "Gibt es eine Unterkunft vor Ort?",
      content: (
        <>
          <p>
            Damit Ihr Euch auf Eure individuellen Bedürfnisse und Vorlieben
            einstellen könnt, möchten wir Euch bitten, Euch eigenständig um Eure
            Unterkunft zu kümmern. Bitte denkt daran,{" "}
            <strong>frühzeitig eure Unterkunft zu buchen</strong>, da die
            Nachfrage in Moraira besonders hoch sein kann
          </p>
          <p className="mt-2">
            Für den Aufenthalt bietet Moraira verschiedene Möglichkeiten, hier
            nur ein paar Ideen oder Anregungen:{" "}
          </p>
          <p className="mt-2">
            <strong>Hotels: </strong>
            <Link
              href="https://www.ritualdeterra.com/moraira-hotel/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              Hotel Ritual de Terra
            </Link>
          </p>
          <p>
            <strong>Appartements: </strong>
            <Link
              href="https://www.costa-blanca-ferien.de/moraira.html"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              Costa Blanca Ferien
            </Link>
          </p>
          <p className="mt-2">
            Auch in Moraira und Umgebung gibt es sonst Airbnb.
          </p>
        </>
      ),
    },
    {
      title: "Welcher Flughafen ist für die Anreise geeignet? ",
      content:
        "Egal, ob Alicante oder Valencia, beide Flughäfen bieten bequeme und unkomplizierte Anreisemöglichkeiten.",
    },
    {
      title: "Wo kann ich einen Mietwagen mieten? ",
      content: (
        <>
          {" "}
          <p>
            Ebenfalls könnt Ihr an beiden Flughäfen direkt einen Mietwagen für
            die Weiterreise buchen.
          </p>
          <p className="mt-2">
            Eine Empfehlung von uns, welche Website ganz gut ist:{" "}
            <Link
              href="https://www.doyouspain.com/index.htm"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              Spain Car Hire
            </Link>
          </p>
          <p className="mt-2">
            Bitte schaut Euch aber sehr genau die Bewertungen an und behaltet
            immer im Hinterkopf, dass günstig nicht immer gleich günstig ist!
          </p>
        </>
      ),
    },
    {
      title: "Was können wir Euch schenken? ",
      content:
        "Wir freuen uns von Herzen, dass ihr an unserer Hochzeit teilnehmen werdet – eure Anwesenheit ist das schönste Geschenk, das ihr uns machen könnt! ",
    },
    {
      title: "Wen spreche ich bezüglich der Hochzeitorganisation an? ",
      content: (
        <>
          Wir sind gerne per Email erreichbar:{" "}
          <a
            href="mailto:john.korter@gmail.com"
            className="underline hover:no-underline"
          >
            John
          </a>{" "}
          oder{" "}
          <a
            href="mailto:reykja80@yahoo.de"
            className="underline hover:no-underline"
          >
            Reykja
          </a>{" "}
        </>
      ),
    },
    {
      title: "Wie kann ich meine Zusage oder Absage übermitteln? ",
      content:
        "Bitte nutzt für die An – oder Abmeldung die oben genannte Möglichkeit. Wir würden uns freuen, wenn Du uns bis spätestens 01.08.2025 eine Rückmeldung gibst.",
    },
    {
      title:
        "Wie komme ich nach der Trauung/Sektempfang an der Burg in Moraira zur Feierlocation Oceana und auch wieder zurück?",
      content: (
        <>
          <p>
            Nach der Trauung und dem Sektempfang steht ein Bustransfer ab der
            Burg in Moraira ab ca. 16:00/16:15 Uhr zur Location Oceana bereit.
          </p>
          <p className="mt-2">
            Wer lieber individuell zur Location Oceana fahren möchte, kann dies
            selbstverständlich gerne tun. Parkplätze sind vor Ort vorhanden,
            sodass ihr euer Fahrzeug bequem abstellen könnt.
          </p>
          <p className="mt-2">
            Bitte plant ausreichend Zeit für die Fahrt ein, damit ihr entspannt
            und pünktlich zur Feier kommt.
          </p>
          <p className="mt-2">
            Für die Rückfahrt nach Moraira sind folgende Transfers organisiert:
          </p>
          <ul className="mt-2 list-disc">
            <li className="ml-4">Erster Rücktransfer: ca. 23:00 Uhr</li>
            <li className="ml-4">Letzter Rücktransfer: ca. 01:30 Uhr</li>
          </ul>
        </>
      ),
    },
  ];

  const DataEnglish = [
    {
      title: "What is the dress code?",
      content: (
        <p>
          To celebrate the festive occasion, we have decided on the dress code{" "}
          <strong>&quot;Summer elegant with your dancing shoes&quot;</strong>.
          We love the summer flair and hope that you feel comfortable in light
          and elegant outfits.{" "}
          <strong>
            For the evening, we would also recommend a jacket. Please check the
            weather report before departure!
          </strong>
        </p>
      ),
    },
    {
      title: "Is there accommodation on site?",
      content: (
        <>
          <p>
            So that you can adapt to your individual needs and preferences, we
            ask you to take care of your accommodation independently. Please
            remember to <strong>book your accommodation early</strong>, as
            demand in Moraira can be particularly high
          </p>
          <p className="mt-2">
            For your stay, Moraira offers various options, here are just a few
            ideas or suggestions:{" "}
          </p>
          <p className="mt-2">
            <strong>Hotels: </strong>
            <Link
              href="https://www.ritualdeterra.com/moraira-hotel/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              Hotel Ritual de Terra
            </Link>
          </p>
          <p>
            <strong>Apartments: </strong>
            <Link
              href="https://www.costa-blanca-ferien.de/moraira.html"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              Costa Blanca Ferien
            </Link>
          </p>
          <p className="mt-2">
            There is also Airbnb in Moraira and the surrounding area.
          </p>
        </>
      ),
    },
    {
      title: "Which airport is suitable for arrival?",
      content:
        "Whether Alicante or Valencia, both airports offer convenient and uncomplicated arrival options.",
    },
    {
      title: "Where can I rent a car? ",
      content: (
        <>
          {" "}
          <p>
            You can also book a rental car for the onward journey directly at
            both airports.
          </p>
          <p className="mt-2">
            A recommendation from us, which website is quite good:{" "}
            <Link
              href="https://www.doyouspain.com/index.htm"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              Spain Car Hire
            </Link>
          </p>
          <p className="mt-2">
            But please look very closely at the reviews and always keep in mind
            that cheap is not always cheap!
          </p>
        </>
      ),
    },
    {
      title: "What about wedding gifts?",
      content:
        "We are delighted that you will be attending our wedding – your presence is the most beautiful gift you can give us!",
    },
    {
      title: "Who do I contact regarding wedding organization?",
      content: (
        <>
          You can contact us under:{" "}
          <a
            href="mailto:john.korter@gmail.com"
            className="underline hover:no-underline"
          >
            John
          </a>{" "}
          or{" "}
          <a
            href="mailto:reykja80@yahoo.de"
            className="underline hover:no-underline"
          >
            Reykja
          </a>{" "}
        </>
      ),
    },
    {
      title: "How do I accept the invitation or decline it?",
      content:
        "Please use the above-mentioned option for registration or cancellation. We would be delighted if you could give us feedback by 01.08.2025 at the latest.",
    },
    {
      title:
        "How do I get from the wedding/reception at the castle in Moraira to the celebration location Oceana and back again?",
      content: (
        <>
          <p>
            After the wedding ceremony and champagne reception, a bus transfer
            will be available from the castle in Moraira to the Oceana venue
            from approx. 4:00 p.m./4:15 p.m.
          </p>
          <p className="mt-2">
            If you prefer to drive to the Oceana location individually, you are
            of course welcome to do so. Parking is available on site so that you
            can conveniently park your vehicle.
          </p>
          <p className="mt-2">
            Please allow enough time for the journey so that you arrive at the
            celebration relaxed and on time.
          </p>
          <p className="mt-2">
            The following transfers are organized for the return trip to
            Moraira:
          </p>
          <ul className="mt-2 list-disc">
            <li className="ml-4">First return transfer: approx. 11:00 p.m.</li>
            <li className="ml-4">Last return transfer: approx. 1:30 a.m.</li>
          </ul>
        </>
      ),
    },
  ];

  const DataFrench = [
    {
      title: "Quel est le code vestimentaire?",
      content: (
        <p>
          Pour célébrer l&apos;occasion festive, nous avons décidé du code
          vestimentaire{" "}
          <strong>
            &quot;Élégant d&apos;été avec chaussures de danse&quot;
          </strong>
          . Nous aimons l&apos;ambiance estivale et espérons que vous vous
          sentirez à l&apos;aise dans des tenues légères et élégantes.{" "}
          <strong>
            Pour le soir, nous recommandons également une veste. Veuillez
            consulter le bulletin météo avant le départ!
          </strong>
        </p>
      ),
    },
    {
      title: "Y a-t-il un hébergement sur place?",
      content: (
        <>
          <p>
            Afin que vous puissiez vous adapter à vos besoins et préférences
            individuels, nous vous demandons de vous occuper de votre
            hébergement de manière indépendante. Veuillez penser à{" "}
            <strong>réserver votre hébergement tôt</strong>, car la demande à
            Moraira peut être particulièrement élevée{" "}
          </p>
          <p className="mt-2">
            Pour votre séjour, Moraira offre diverses options, voici quelques
            idées ou suggestions:{" "}
          </p>
          <p className="mt-2">
            <strong>Hôtels: </strong>
            <Link
              href="https://www.ritualdeterra.com/moraira-hotel/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              Hotel Ritual de Terra
            </Link>
          </p>
          <p>
            <strong>Appartements: </strong>
            <Link
              href="https://www.costa-blanca-ferien.de/moraira.html"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              Costa Blanca Ferien
            </Link>
          </p>
          <p className="mt-2">
            Il y a aussi Airbnb à Moraira et dans les environs.
          </p>
        </>
      ),
    },
    {
      title: "Quel aéroport est adapté pour l'arrivée?",
      content:
        "Que ce soit Alicante ou Valence, les deux aéroports offrent des options d'arrivée pratiques et simples.",
    },
    {
      title: "Où puis-je louer une voiture? ",
      content: (
        <>
          {" "}
          <p>
            Vous pouvez également réserver une voiture de location pour le
            trajet directement dans les deux aéroports.
          </p>
          <p className="mt-2">
            Une recommandation de notre part, quel site Web est assez bon:{" "}
            <Link
              href="https://www.doyouspain.com/index.htm"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              Spain Car Hire
            </Link>
          </p>
          <p className="mt-2">
            Mais veuillez regarder de très près les avis et gardez toujours à
            l&apos;esprit que pas cher n&apos;est pas toujours bon marché!
          </p>
        </>
      ),
    },
    {
      title: "Que pouvons-nous vous offrir comme cadeau?",
      content:
        "Nous sommes ravis que vous assistiez à notre mariage - votre présence est le plus beau cadeau que vous puissiez nous faire!",
    },
    {
      title: "Qui dois-je contacter concernant l'organisation du mariage?",
      content: (
        <>
          Contactez-nous sous:{" "}
          <a
            href="mailto:john.korter@gmail.com"
            className="underline hover:no-underline"
          >
            John
          </a>{" "}
          et/ou{" "}
          <a
            href="mailto:reykja80@yahoo.de"
            className="underline hover:no-underline"
          >
            Reykja
          </a>{" "}
        </>
      ),
    },
    {
      title: <>Comment puis-je répondre à l&apos;invitation?</>,
      content:
        "Veuillez utiliser l'option de réservation ou d'annulation mentionnée ci-dessus. Nous serions ravis si vous pouviez nous donner votre avis au plus tard le 01.08.2025.",
    },
    {
      title:
        "Comment puis-je me rendre du mariage/réception au château de Moraira au lieu de la fête Oceana et revenir?",
      content: (
        <>
          <p>
            Après la cérémonie de mariage et la réception au champagne, un
            transfert en bus sera disponible depuis le château de Moraira vers
            le lieu Oceana à partir d&apos;environ 16h00/16h15.
          </p>
          <p className="mt-2">
            Si vous préférez vous rendre individuellement au lieu Oceana, vous
            êtes bien sûr le bienvenu. Un parking est disponible sur place afin
            que vous puissiez garer votre véhicule en toute commodité.
          </p>
          <p className="mt-2">
            Veuillez prévoir suffisamment de temps pour le trajet afin d&apos;
            arriver à la célébration détendu et à l&apos;heure.
          </p>
          <p className="mt-2">
            Les transferts suivants sont organisés pour le retour à Moraira:
          </p>
          <ul className="mt-2 list-disc">
            <li className="ml-4">Premier transfert retour: environ 23h00</li>
            <li className="ml-4">Dernier transfert retour: environ 1h30</li>
          </ul>
        </>
      ),
    },
  ];

  if (language === "en") {
    Data = DataEnglish;
  }

  if (language === "de") {
    Data = DataGerman;
  }

  if (language === "fr") {
    Data = DataFrench;
  }

  const [indexopen, setIndexOpen] = useState<number>(99999);

  const handleClick = (index: number) => {
    setIndexOpen(index === indexopen ? 9999 : index);
  };

  const itemsOndData = Object.keys(DataGerman).length;

  return (
    <section className="lg:p-4 xl:p-0">
      <div
        className={`flex w-full flex-col items-center rounded-lg bg-white p-4 md:p-6 ${nunito.className}`}
      >
        {Data?.map((item, index) => (
          <div key={index} className="w-full">
            <AccordionItem
              open={index === indexopen}
              title={item.title}
              onClick={() => handleClick(index)}
            >
              {item.content}
            </AccordionItem>
            {itemsOndData - index < 2 ? null : <Line />}
          </div>
        ))}
      </div>
    </section>
  );
};
