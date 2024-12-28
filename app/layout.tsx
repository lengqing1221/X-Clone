import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/helpers/Provider";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "X.com",
  description: "X.com Clone",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href='/images/x.png' type="image/x-icon" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-black`}
      >
        <Provider>
          <main className="w-screen h-full">
          {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
