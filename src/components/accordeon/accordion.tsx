"use client";

import { useState } from "react";
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
      content: `Um den festlichen Anlass gebührend zu zelebrieren, haben wir uns für den Dresscode "Sommerlich elegant mit Tanzschuhen" entschieden. Wir lieben den sommerlichen Flair und wünschen uns, dass ihr euch in luftig-leichten und eleganten Outfits wohl fühlt. Für den Abend würden wir euch zusätzlich ein Jäckchen empfehlen. Bitte checkt den Wetterbericht vor Abflug!`,
    },
    {
      title: "Gibt es eine Unterkunft vor Ort?",
      content:
        "Damit Ihr Euch auf Eure individuellen Bedürfnisse und Vorlieben einstellen könnt, möchten wir Euch bitten, Euch eigenständig um Eure Unterkunft zu kümmern. Bitte denkt daran, frühzeitig eure Unterkunft zu buchen, da die Nachfrage in Moraira besonders hoch sein kann",
    },
    {
      title: "Welcher Flughafen ist für die Anreise geeignet? ",
      content:
        "Egal, ob Alicante oder Valencia, beide Flughäfen bieten bequeme und unkomplizierte Anreisemöglichkeiten.",
    },
    {
      title: "Wo kann ich einen Mietwagen mieten? ",
      content:
        "Ebenfalls könnt Ihr an beiden Flughäfen direkt einen Mietwagen für die Weiterreise buchen. ",
    },
    {
      title: "Was können wir Euch schenken? ",
      content:
        "Wir freuen uns von Herzen, dass ihr an unserer Hochzeit teilnehmen werdet – eure Anwesenheit ist das schönste Geschenk, das ihr uns machen könnt! ",
    },
    {
      title: "Wen spreche ich bezüglich der Hochzeitorganisation an? ",
      content: "Schaun mer mal",
    },
    {
      title: "Wie kann ich meine Zusage oder Absage übermitteln? ",
      content:
        "Bitte nutzt für die An – oder Abmeldung die oben genannte Möglichkeit. Wir würden uns freuen, wenn Du uns bis spätestens 01.08.2025 eine Rückmeldung gibst.",
    },
  ];

  const DataEnglish = [
    {
      title: "What is the dress code?",
      content: `To celebrate the festive occasion appropriately, we have decided on the dress code "Summer elegant with dance shoes". We love the summer flair and hope you feel comfortable in light and elegant outfits. For the evening we would recommend a jacket. Please check the weather report before departure!`,
    },
    {
      title: "Is there accommodation on site?",
      content:
        "To allow you to adjust to your individual needs and preferences, we ask you to take care of your accommodation independently. Please remember to book your accommodation early, as demand in Moraira can be particularly high.",
    },
    {
      title: "Which airport is suitable for arrival?",
      content:
        "Whether Alicante or Valencia, both airports offer convenient and uncomplicated arrival options.",
    },
    {
      title: "Where can I rent a car?",
      content:
        "You can also book a rental car for the onward journey directly at both airports.",
    },
    {
      title: "What can we give you as a gift?",
      content:
        "We are delighted that you will be attending our wedding – your presence is the most beautiful gift you can give us!",
    },
    {
      title: "Who do I contact regarding the wedding organization?",
      content: "Schaun mer mal",
    },
    {
      title: "How can I communicate my acceptance or rejection?",
      content:
        "Please use the above-mentioned option to confirm or cancel. We would be delighted if you could give us feedback by 01.08.2025 at the latest.",
    },
  ];

  const DataFrench = [
    {
      title: "Quel est le code vestimentaire?",
      content: `Pour célébrer l'occasion festive de manière appropriée, nous avons opté pour le code vestimentaire "Élégant d'été avec chaussures de danse". Nous adorons l'ambiance estivale et espérons que vous vous sentirez à l'aise dans des tenues légères et élégantes. Pour la soirée, nous vous recommandons une veste. Veuillez consulter le bulletin météo avant le départ!`,
    },
    {
      title: "Y a-t-il un hébergement sur place?",
      content:
        "Pour vous permettre de vous adapter à vos besoins et préférences individuels, nous vous demandons de vous occuper de votre hébergement de manière indépendante. Veuillez penser à réserver votre hébergement tôt, car la demande à Moraira peut être particulièrement élevée.",
    },
    {
      title: "Quel aéroport est adapté pour l'arrivée?",
      content:
        "Que ce soit Alicante ou Valence, les deux aéroports offrent des options d'arrivée pratiques et simples.",
    },
    {
      title: "Où puis-je louer une voiture?",
      content:
        "Vous pouvez également réserver une voiture de location pour le trajet aller directement dans les deux aéroports.",
    },
    {
      title: "Que pouvons-nous vous offrir comme cadeau?",
      content:
        "Nous sommes ravis que vous assistiez à notre mariage - votre présence est le plus beau cadeau que vous puissiez nous faire!",
    },
    {
      title: "Qui dois-je contacter concernant l'organisation du mariage?",
      content: "Schaun mer mal",
    },
    {
      title: "Comment puis-je communiquer mon acceptation ou mon refus?",
      content:
        "Veuillez utiliser l'option mentionnée ci-dessus pour confirmer ou annuler. Nous serions ravis si vous pouviez nous donner votre avis au plus tard le 01.08.2025.",
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
    <section
      className={`flex w-full flex-col items-center rounded-lg bg-white p-4 md:p-6 ${nunito.className}`}
    >
      {Data?.map((item, index) => (
        <div key={item.title} className="w-full">
          <AccordionItem
            key={item.title}
            open={index === indexopen}
            title={item.title}
            onClick={() => handleClick(index)}
          >
            {item.content}
          </AccordionItem>
          {itemsOndData - index < 2 ? null : <Line />}
        </div>
      ))}
    </section>
  );
};
