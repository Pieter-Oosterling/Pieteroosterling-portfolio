import type { Metadata } from "next";
import Header from '@/components/Header/Header';
import KonamiListener from '@/components/KonamiListener';
import CommandPalette from '@/components/CommandPalette/CommandPalette';
import './globals.css';

export const metadata = {
  title: 'Portfolio - Pieter Oosterling',
  description: 'Mijn O&O Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <Header />
        <KonamiListener />
        <CommandPalette />
        {children}
      </body>
    </html>
  );
}
