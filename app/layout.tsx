import type { Metadata } from "next";

// FONTS
// import localFont from "next/font/local";
import { JetBrains_Mono } from 'next/font/google';

// CSS
import "./globals.css";

// COMPONENTS
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets:  ['latin'],
  weight:   ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'

});

export const metadata: Metadata = {
  title: "Ron Santos | Portfolio Website",
  description: "Portfolio of Ron, a skilled developer and problem-solver with expertise in web and software development, showcasing projects, technical skills, and achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
