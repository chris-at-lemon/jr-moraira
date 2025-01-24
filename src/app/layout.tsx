import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reykja un John",
  description: "Hochzeit in Moraira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
