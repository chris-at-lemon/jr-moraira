import Image from "next/image";

import LanguageToggle from "@/components/languageToggle/languageToggle";
import CountDown from "@/components/countdown/countdown";
import GoogleMap from "@/components/googleMap/googlemap";
import ContactFormWrapper from "@/components/forms/contactFormWrapper";
import MainHeaders from "@/components/text/mainHeaders";
import HeaderSeparator from "@/components/contentSection/headerSeparator";
import ImagesAndTextWrapper from "@/components/contentSection/imagesAndTextWrapper";
import Gallery from "@/components/imageGallery/gallery";
import DateToCountTo from "@/components/countdown/dateToCountTo";
import Tagesablauf from "@/components/tagesablauf/tagesablauf";
import { Accordion } from "@/components/accordeon/accordion";

export default function Home() {
  return (
    <>
      <main className="text-neutral-900">
        <div className="grid h-screen min-h-[640px] grid-cols-1 gap-4 bg-orange-50 md:grid-cols-8">
          <div className="absolute left-0 top-0 col-span-8 h-screen min-h-[640px] w-full opacity-15">
            <Image
              src="https://ik.imagekit.io/vcqe1lhbs/jr-moraira/1255d68d-0c7e-4fb8-9bc6-8804c788fbcb_XjTaFcuhx.JPG?updatedAt=1737816995082"
              fill
              alt="Reykja and John"
              style={{ objectFit: "cover" }}
              sizes="100vw"
              priority
            />
          </div>
          <div className="col-span-8 flex min-h-screen flex-col items-center justify-center space-y-96 md:space-y-44">
            <div>
              <MainHeaders />
            </div>
            <div className="mt-8 text-center md:mt-16">
              <DateToCountTo />
              <div className="mt-4">
                <CountDown />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <HeaderSeparator section="crazies" quotes={true} />
        </div>
        <div className="container mx-auto">
          <ImagesAndTextWrapper section="crazies" />
        </div>
        <div className="container mx-auto">
          <HeaderSeparator section="probezeit" quotes={true} />
        </div>
        <div className="container mx-auto">
          <Gallery />
        </div>

        <div className="container mx-auto">
          <HeaderSeparator section="trauung" quotes={false} />
        </div>

        <div className="container mx-auto">
          <ImagesAndTextWrapper section="trauung" />
        </div>

        <div className="col-span-8 mt-16 grayscale">
          <GoogleMap placeId={"ChIJ-Wg3UsgHnhIR9o_O1EUJEiY"} />
        </div>

        <div className="container mx-auto">
          <HeaderSeparator section="tagesablauf" quotes={false} />
        </div>

        <div className="container mx-auto">
          <Tagesablauf />
        </div>

        <div className="container mx-auto">
          <HeaderSeparator section="location" quotes={false} />
        </div>
        <div className="container mx-auto">
          <ImagesAndTextWrapper section="location" />
        </div>
        <div className="col-span-8 mt-16 grayscale">
          <GoogleMap placeId={"ChIJZW_8E1oHnhIRNzYOw3AX8yE"} />
        </div>

        <div className="px-4 py-16 md:px-0">
          <div className="container mx-auto">
            <Accordion />
          </div>
        </div>
      </main>
      <ContactFormWrapper />
      <LanguageToggle />
    </>
  );
}
