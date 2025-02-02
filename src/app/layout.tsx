import type { Metadata } from "next";
import "./globals.css";

import { LanguageContextProvider } from "@/context/languageContext";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Reykja und John",
  description: "Reykja und John's Hochzeit in Moraira",
  openGraph: {
    title: "Reykja und John",
    description: "Reykja und John's Hochzeit in Moraira",
    url: "https://www.jr-moraira.com",
    siteName: "Reykja und John",
    images: [
      {
        url: "https://ik.imagekit.io/vcqe1lhbs/jr-moraira/j&r_oxLU19r4q.png?updatedAt=1738491271132",
        width: 512,
        height: 512,
      },
    ],
    locale: "de_DE",
    alternateLocale: ["de_DE", "en_UK"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageContextProvider>{children}</LanguageContextProvider>
      </body>
    </html>
  );
}
