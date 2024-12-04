import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luca Palminteri - Software Engineer Portfolio",
  description:
    "Full Stack Web Developer and DevOps Engineer with expertise in TypeScript, React, Next.js, Node.js, and more.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "DevOps",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "C#",
    "ASP.NET",
  ],
  authors: [
    {
      name: "Luca Palminteri",
      url: "https://github.com/LucaPalminteri",
    },
  ],
  themeColor: "#3b82f6",
  openGraph: {
    title: "Luca Palminteri - Software Engineer Portfolio",
    description:
      "Full Stack Web Developer and DevOps Engineer with expertise in TypeScript, React, Next.js, Node.js, and more.",
    url: "https://portfolio4-three-neon.vercel.app/",
    type: "website",
    siteName: "Luca Palminteri Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://portfolio4-three-neon.vercel.app/luca.jpeg",
        width: 1200,
        height: 630,
        alt: "Luca Palminteri Portfolio preview image",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luca Palminteri - Software Engineer Portfolio",
    description:
      "Full Stack Web Developer and DevOps Engineer with expertise in TypeScript, React, Next.js, Node.js, and more.",
    images: ["https://portfolio4-three-neon.vercel.app/luca.jpeg"],
  },
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
