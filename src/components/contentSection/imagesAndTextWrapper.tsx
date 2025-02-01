"use client";

import dynamic from "next/dynamic";

import ImageAndText from "@/components/contentSection/imageAndText";
import { useLanguageContext } from "@/context/languageContext";

const CraziesText = dynamic(() => import("./texts/craziesText"));
const TrauungText = dynamic(() => import("./texts/trauungText"));
const LocationText = dynamic(() => import("./texts/locationText"));

type Props = {
  section: string;
};

const ImagesAndTextWrapper = ({ section }: Props) => {
  const { language } = useLanguageContext();

  let text;
  let image;
  if (section === "crazies") {
    text = <CraziesText language={language} />;
    image =
      "https://ik.imagekit.io/vcqe1lhbs/jr-moraira/IMG_6079_YmEymi8Ys.jpeg?updatedAt=1737816992965";
  }

  if (section === "trauung") {
    text = <TrauungText language={language} />;
    image =
      "https://ik.imagekit.io/vcqe1lhbs/jr-moraira/castillo-moraira_Od2WtqPqV.jpg?updatedAt=1738352781038";
  }

  if (section === "location") {
    text = <LocationText language={language} />;
    image =
      "https://ik.imagekit.io/vcqe1lhbs/jr-moraira/oceana@0.25x_ydorQfclhD.jpg?updatedAt=1738413220975";
  }

  return (
    <ImageAndText
      image={image ? image : ""}
      text={text ? <>{text}</> : <></>}
    />
  );
};

export default ImagesAndTextWrapper;
