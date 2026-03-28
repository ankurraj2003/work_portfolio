import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // TODO: Replace with your name and description
  title: "Arun Kumar | Full Stack Developer",
  description:
    "Personal portfolio of Arun Kumar — Full Stack Developer specializing in React, Node.js, and modern web technologies.",
  keywords: [
    "developer",
    "portfolio",
    "full stack",
    "react",
    "next.js",
    "typescript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
