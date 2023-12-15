// lib
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
// local
import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"] });

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
      <body className={publicSans.className}>{children}</body>
    </html>
  );
}
