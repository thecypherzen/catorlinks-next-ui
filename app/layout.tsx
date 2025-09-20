import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/UseTheme";
import MainNav from "@/components/MainNav";
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
  title: "Cartolinks - William Inyam",
  description: "A simple NextJS UI implementation",
};

/**
 * App's layout
 * @function RootLayout
 * @param {object} props.children Children to be rendered
 * @returns {HTMLBaseElement} The Root
 */
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
        <ThemeProvider>
          <MainNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
