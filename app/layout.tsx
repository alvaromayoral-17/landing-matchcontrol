import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Match Control | Dashboard de gestión para clubes de fútbol",
  description:
    "Herramientas personalizadas de gestión para clubes de fútbol semiprofesionales. Plantilla, finanzas, rivales y más en un solo dashboard.",
  keywords: [
    "gestión club fútbol",
    "software club fútbol",
    "dashboard fútbol",
    "1ª RFEF",
    "2ª RFEF",
    "Tercera Federación",
  ],
  openGraph: {
    title: "Match Control | Dashboard para clubes de fútbol",
    description:
      "Dashboard integral para clubes de fútbol semiprofesionales. Digitaliza la gestión de tu club.",
    url: "https://matchcontrol.es",
    type: "website",
    siteName: "Match Control",
  },
  twitter: {
    card: "summary_large_image",
    title: "Match Control",
    description: "Dashboard integral para clubes de fútbol semiprofesionales.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
