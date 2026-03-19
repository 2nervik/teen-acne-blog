import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "./SiteChrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teen Acne Solutions | Evidence-Based Skincare Tips",
  description:
    "Medically reviewed tips and advice for moms and teens dealing with acne. Evidence-based skincare routines, product recommendations, and lifestyle tips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
