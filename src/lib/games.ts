export type Game = {
  active: boolean;
  alt: string;
  href: string;
  src: string;
  title: string;
};

export const games: Game[] = [
  {
    active: true,
    alt: "Juego tic tac toe",
    href: "tictactoe",
    src: "/images/tictactoe.png",
    title: "Tictactoe",
  }
];
