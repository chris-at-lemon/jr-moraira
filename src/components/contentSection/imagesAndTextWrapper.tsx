"use client";

import ImageAndText from "@/components/contentSection/imageAndText";
import { useLanguageContext } from "@/context/languageContext";

import { craziesText } from "@/components/contentSection/texts/craziesText";

type Props = {
  section: string;
};

const ImagesAndTextWrapper = ({ section }: Props) => {
  const { language } = useLanguageContext();

  let text;
  let image;
  if (section === "crazies") {
    text = craziesText(language);
    image =
      "https://ik.imagekit.io/vcqe1lhbs/jr-moraira/IMG_6079_YmEymi8Ys.jpeg?updatedAt=1737816992965";
  }

  return (
    <ImageAndText
      image={image ? image : ""}
      text={text ? <>{text}</> : <></>}
    />
  );
};

export default ImagesAndTextWrapper;
