import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/Header/Header';
import KonamiListener from '@/components/KonamiListener';
import CommandPalette from '@/components/CommandPalette/CommandPalette';
import './globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Portfolio - Pieter Oosterling',
  description: 'Mijn O&O Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <KonamiListener />
        <CommandPalette />
        {children}
      </body>
    </html>
  );
}
