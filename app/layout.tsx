import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Build Software with AI — A Beginner Guide",
  description:
    "Learn how to build and publish a website using Cursor, GitHub, and Vercel. No coding experience required.",
  openGraph: {
    title: "Build Software with AI — A Beginner Guide",
    description:
      "Learn how to build and publish a website using Cursor, GitHub, and Vercel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
