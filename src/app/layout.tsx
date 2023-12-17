// lib
import type { Metadata } from "next";
// local
import "./globals.css";
import { inter } from "@/libs/fonts";
import PortfolioContextProvider from "@/context";

export const metadata: Metadata = {
  title: "Dynamic Portfolio",
  description: "Dynamic Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortfolioContextProvider>
      <html lang="en">
        <body className={`bg-[#FAFAFA] ${inter.className}`}>{children}</body>
      </html>
    </PortfolioContextProvider>
  );
}
