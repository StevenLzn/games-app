"use client";
import { useRouter } from "next/navigation";
import { GameListContainer } from "./GameListStyles";
import GameCard from "../../molecules/GameCard/GameCard";

// Tipar y organizar en un archivo json aparte
const games = [
  {
    title: "Tic tac toe",
    alt: "Juego tic tac toe",
    src: "/images/tictactoe.png",
    href: "tictactoe",
  },
  {
    title: "Tic tac toe 2",
    alt: "Juego tic tac toe",
    src: "https://cdn-icons-png.flaticon.com/512/2911/2911080.png",
    href: "tictactoe",
  },
  {
    title: "Tic tac toe 3",
    alt: "Juego tic tac toe",
    src: "https://cdn-icons-png.flaticon.com/512/2911/2911080.png",
    href: "tictactoe",
  },
  {
    title: "Tic tac toe 4",
    alt: "Juego tic tac toe",
    src: "/images/tictactoe.png",
    href: "tictactoe",
  },
  {
    title: "Tic tac toe 5",
    alt: "Juego tic tac toe",
    src: "https://cdn-icons-png.flaticon.com/512/2911/2911080.png",
    href: "tictactoe",
  },
];

const GameList = () => {
  const router = useRouter();
  return (
    <GameListContainer>
      {games.map((game) => (
        <GameCard
          key={game.title}
          text={game.title}
          src={game.src}
          alt={game.alt}
          color="#dae0f1"
          onClick={() => router.push(game.href)}
        ></GameCard>
      ))}
    </GameListContainer>
  );
};

export default GameList;
