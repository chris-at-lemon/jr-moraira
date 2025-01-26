import Image from "next/image";

import LanguageToggle from "@/components/languageToggle/languageToggle";
import CountDown from "@/components/countdown/countdown";
import GoogleMap from "@/components/googleMap/googlemap";
import ContactFormWrapper from "@/components/forms/contactFormWrapper";
import MainHeaders from "@/components/text/mainHeaders";

export default function Home() {
  return (
    <>
      <main className="bg-orange-50 text-neutral-900">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-8">
          <div className="absolute left-0 top-0 col-span-8 h-screen w-full opacity-15">
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
            <div className="mt-8 md:mt-16">
              <CountDown />
            </div>
          </div>
        </div>
        <div className="col-span-8 grayscale">
          <GoogleMap />
        </div>
      </main>
      <ContactFormWrapper />
      <LanguageToggle />
    </>
  );
}
