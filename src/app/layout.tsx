import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://albert-portfolio-chi.vercel.app"),
  title: {
    default: "Albert Rodríguez | Full-Stack Developer & Software Engineer",
    template: "%s | Albert Rodríguez",
  },
  description:
    "Portafolio profesional de Albert Rodríguez. Desarrollador Web Full-Stack y TSU en Informática, especializado en arquitectura de software, bases de datos relacionales y sistemas de alto impacto.",
  keywords: [
    "Albert Rodríguez",
    "Full-Stack Developer",
    "Software Engineer",
    "Kredentia",
    "Next.js",
    "TypeScript",
    "PHP MVC",
    "MySQL",
    "Docker",
    "Arquitectura de Software",
    "Venezuela",
  ],
  authors: [{ name: "Albert Rodríguez", url: "https://albert-portfolio-chi.vercel.app" }],
  creator: "Albert Rodríguez",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://albert-portfolio-chi.vercel.app",
    title: "Albert Rodríguez | Full-Stack Developer & Software Engineer",
    description:
      "Desarrollador Web Full-Stack especializado en arquitectura de software, bases de datos y sistemas de alto impacto.",
    siteName: "Albert Tech Studio",
    images: [
      {
        url: "/albert-rodriguez-fullstack.webp",
        width: 720,
        height: 720,
        alt: "Albert Rodríguez - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Albert Rodríguez | Full-Stack Developer & Software Engineer",
    description:
      "Desarrollador Web Full-Stack especializado en arquitectura de software, bases de datos y sistemas de alto impacto.",
    images: ["/albert-rodriguez-fullstack.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-neutral-950 font-sans text-neutral-200">
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
