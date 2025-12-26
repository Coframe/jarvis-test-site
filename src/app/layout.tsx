import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Coframe from "./components/Coframe";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JARVIS by Coframe | AI-Powered CRO Experimentation",
  description: "Run smarter A/B tests with AI-powered optimization. JARVIS helps you increase conversions through intelligent experimentation.",
  keywords: ["CRO", "A/B testing", "conversion optimization", "experimentation", "AI optimization"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Coframe />
        {children}
      </body>
    </html>
  );
}
