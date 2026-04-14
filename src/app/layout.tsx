import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ceyo marketing, next 12 months — Jay",
  description: "The plays. Week-by-week execution. How I run it.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-ceyo-ink text-ceyo-text">
        {children}
      </body>
    </html>
  );
}
