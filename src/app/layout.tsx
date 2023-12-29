import type { Metadata } from "next";
import { Inter } from "next/font/google";

import GameSearchInput from "./components/game-search-input";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Games App",
  description: "Play many video games in one site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GameSearchInput />
        {children}
      </body>
    </html>
  );
}
