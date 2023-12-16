// lib
import type { Metadata } from "next";
// local
import "./globals.css";
import { inter } from "@/libs/fonts";
import { Footer, Navbar } from "@/components/templates";

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
    <html lang="en">
      <body className={`bg-[#FAFAFA] ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
