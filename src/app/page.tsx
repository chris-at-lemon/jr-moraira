import { cardo, nunito } from "./fonts";
import CountDown from "@/components/countdown/countdown";

export default function Home() {
  return (
    <main className="bg-orange-50 text-neutral-900">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-8">
        <div className="col-span-8 flex flex-col min-h-screen items-center justify-center">
          <h1
            className={`text-4xl md:text-8xl font-bold ${cardo.className} block text-blue-300`}
          >
            Reykja &amp; John
          </h1>
          <h2
            className={`block font-medium text-xl md:text-4xl mt-4 md:mt-12 ${nunito.className} text-neutral-600`}
          >
            Wat mut dat mut
          </h2>
          <div className="mt-8 md:mt-16">
            <CountDown />
          </div>
        </div>
      </div>
    </main>
  );
}
