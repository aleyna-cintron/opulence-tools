import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../assets/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Opulence Tools - Luxury Craftsmanship Redefined",
  description: "Exquisite luxury tools and equipment for discerning craftsmen. Unparalleled quality and sophistication in every piece.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
