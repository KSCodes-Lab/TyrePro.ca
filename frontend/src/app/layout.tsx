import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ReduxProviders } from "@/components/ReduxProvider/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TyrePro - Quality New and Used Tires in Stoney Creek, Near Hamilton",
  description:
    "TyrePro offers quality new and used tires, branded tires, and automotive services in Stoney Creek, conveniently located near Hamilton. Visit us for top-quality tires, tire installation, balancing, wheel alignments, and more.",
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
        data-new-gr-c-s-check-loaded="14.1256.0" data-gr-ext-installed=""
      >
        <div className="max-w-[1920px] mx-auto">
          <ReduxProviders>
          <Header />
          {children}
          <Footer />
          </ReduxProviders>
        </div>
      </body>
    </html>
  );
}
