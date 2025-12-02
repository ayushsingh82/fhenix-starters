import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "(fhenix*)-starters",
  description: "this website contains fhenix starter repos to help you get started with fhenix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A]`}
      >
        <nav className="border-b border-gray-500 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold text-white">
                (fhenix<span className="text-3xl font-bold text-[#FF7A4D]">*</span>)-starters
              </Link>
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link href="/explore" className="text-white hover:text-zinc-400 transition">
                  Explore
                </Link>
              </div>
              <div className="flex items-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
