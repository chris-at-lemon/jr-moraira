import { cardo, nunito } from "./fonts";

export default function Home() {
  return (
    <main className="bg-orange-50 text-neutral-900">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-8">
        <div className="col-span-8 flex flex-col min-h-screen items-center justify-center">
          <h1
            className={`text-8xl font-bold ${cardo.className} block text-blue-300`}
          >
            Reykja und John
          </h1>
          <h2
            className={`block font-medium text-4xl mt-16 ${nunito.className} text-neutral-600`}
          >
            Wat mut dat mut
          </h2>
        </div>
      </div>
    </main>
  );
}
