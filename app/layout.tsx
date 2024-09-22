import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

import "./globals.scss";

import Header from "@/components/header";
import StoreProvider from "./store-provider";

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
        <StoreProvider>
          <Header name="Alexandre" />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
