import { games } from "../lib/games";
import GameCard from "./components/ui/cards/game-card";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 py-1">
      <div className="my-4 flex flex-rowflex-wrap justify-center">
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
