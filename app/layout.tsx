// src/app/layout.tsx
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: "Rendermind | Embedded Editing and Rendering Infrastructure",
  description:
    "Integrate custom image and video editors, rendering pipelines, captions, templates, and AI-ready workflows using reusable SDKs and custom engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
