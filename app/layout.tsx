import type { Metadata } from "next";
import { Sora, Montserrat } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Stelaris QR",
  description: "Create beautiful QR codes with your logo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}