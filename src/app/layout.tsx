import type { Metadata } from "next";
import "./globals.css";

import { LanguageContextProvider } from "@/context/languageContext";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Reykja und John",
  description: "Hochzeit in Moraira",
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
