// lib
import type { Metadata } from "next";
// local
import "./globals.css";
import { inter } from "@/fonts";

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
      <body className={`bg-[#FAFAFA] ${inter.className}`}>{children}</body>
    </html>
  );
}
