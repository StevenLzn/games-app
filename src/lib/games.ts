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
  },
  {
    active: true,
    alt: "Juego memo test",
    href: "memo-test",
    src: "/images/memoTest.png",
    title: "MemoTest",
  },
];
