import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "./util/Provider";
import { Cormorant, Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Gabriel & Luanne",
  description: "You are our guest for our wedding on the 27th of April 2024",
};

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "auto",
  // make text transform to uppercase by default

});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "auto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
