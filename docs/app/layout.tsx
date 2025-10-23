import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Site Cleaner - Chrome Extension Documentation",
  description: "A powerful Chrome extension to clean browser data including localStorage, cookies, sessions, and cache with one click. Built with Manifest V3.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
