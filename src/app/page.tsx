import Image from "next/image";

import { cardo, nunito } from "./fonts";
import CountDown from "@/components/countdown/countdown";

export default function Home() {
  return (
    <main className="bg-orange-50 text-neutral-900">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-8">
        <div className="absolute left-0 top-0 col-span-8 h-screen w-screen opacity-15">
          <Image
            src="https://ik.imagekit.io/vcqe1lhbs/jr-moraira/1255d68d-0c7e-4fb8-9bc6-8804c788fbcb_XjTaFcuhx.JPG?updatedAt=1737816995082"
            layout="fill"
            objectFit="cover"
            alt="Reykja and John"
          />
        </div>
        <div className="col-span-8 flex min-h-screen flex-col items-center justify-center space-y-96 md:space-y-24">
          <div>
            <h1
              className={`text-4xl font-bold md:text-8xl ${cardo.className} text-center text-blue-300`}
            >
              Reykja &amp; John
            </h1>
            <h2
              className={`block text-xl font-medium md:mt-12 md:text-4xl ${nunito.className} text-center text-neutral-600`}
            >
              Wat mut dat mut
            </h2>
          </div>
          <div className="mt-8 md:mt-16">
            <CountDown />
          </div>
        </div>
      </div>
    </main>
  );
}
