import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Albert | Full-Stack Developer",
  description:
    "Portafolio de Albert, desarrollador web full-stack y estudiante de Ingeniería Informática, especializado en arquitectura de bases de datos y desarrollo de aplicaciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-neutral-950 font-mono text-neutral-200">
        <BackgroundEffects />
        <div className="relative z-10 flex flex-1 flex-col">
          <Navbar />
          {children}
        </div>
        <ScanlineOverlay />
      </body>
    </html>
  );
}
