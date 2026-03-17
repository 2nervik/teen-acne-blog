import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teen Acne Solutions | Tips for Clearer Skin",
  description:
    "Practical tips and advice for moms and teens dealing with acne. Evidence-based skincare routines, product recommendations, and lifestyle tips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-white`}>
        <header className="border-b border-gray-100">
          <nav className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Teen Acne Solutions
            </Link>
            <div className="flex gap-6 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-900">
                About
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto px-6 py-12">{children}</main>
        <footer className="border-t border-gray-100 mt-20">
          <div className="max-w-3xl mx-auto px-6 py-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Teen Acne Solutions. For
            informational purposes only &mdash; not medical advice.
          </div>
        </footer>
      </body>
    </html>
  );
}
