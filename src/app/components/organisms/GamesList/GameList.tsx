import { GameListContainer } from "./GameListStyles";
import GameCard from "../../molecules/GameCard/GameCard";

export default async function GameList() {
  
  const games = await getGames();
  console.log(games)
  return (
    <GameListContainer>
      {games.map((game) => (
        <GameCard
          key={game.title}
          text={game.title}
          src={game.src}
          alt={game.alt}
          color="#dae0f1"
          path={game.href}
        ></GameCard>
      ))}
    </GameListContainer>
  );
};

async function getGames() {
  const { games } = await import('../../../../data/games.json');
  return games;
};
