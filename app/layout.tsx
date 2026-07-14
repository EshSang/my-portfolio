import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Eshana Sangeeth",
  description:
    "Personal portfolio of Eshana Sangeeth – Power Platform Developer & Web Developer specialising in Microsoft Power Platform, React, and Next.js.",
  icons: {
    icon: "/title.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={inter.className}>
        {children}
      </body>
    </html>
  );
}
