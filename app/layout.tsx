import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

import "./globals.scss";

import Header from "@/components/header";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "FocalPoint",
  description: "Manage your tasks - Legaplan Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${interTight.variable}`}>
        <Header name="Alexandre" />
        {children}
      </body>
    </html>
  );
}
