import SearchInput from "./components/ui/inputs/search-input";
import { games } from "../lib/games";
import GameCard from "./components/ui/cards/game-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 py-3">
      <SearchInput placeholder="Buscar un juego" />
      <div className="my-4 flex flex-row	flex-wrap justify-center">
        {games.map((game) => {
          return (
            <GameCard
              text={game.title}
              alt={game.alt}
              src={game.src}
              href={game.href}
            />
          );
        })}
      </div>
    </main>
  );
}
