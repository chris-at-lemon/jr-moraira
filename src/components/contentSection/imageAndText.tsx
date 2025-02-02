import Image from "next/image";
import { JSX } from "react";

type Props = {
  image: string;
  text: JSX.Element;
};

const ImageAndText = ({ image, text }: Props) => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
        <div className="col-span-1">
          <div className="flex items-center justify-center">
            <div className="relative h-[480px] w-full md:h-[640px] lg:w-3/4">
              <Image
                src={image}
                fill
                alt="Reykja and John"
                style={{ objectFit: "cover", borderRadius: "1rem" }}
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-8 md:px-0 lg:pt-0">{text}</div>
      </div>
    </div>
  );
};

export default ImageAndText;
