import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SearchInput from "./components/ui/inputs/search-input";
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
        <div className="w-5/6 sm:w-1/2 md:w-2/5 xl:w-1/4 mt-3 mx-auto ">
          <SearchInput placeholder="Buscar un juego" />
        </div>
        {children}
      </body>
    </html>
  );
}
