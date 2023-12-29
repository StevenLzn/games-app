export type Game = {
  active: boolean;
  alt: string;
  href: string;
  key: string;
  src: string;
  title: string;
};

export const games: Game[] = [
  {
    active: true,
    alt: "Juego tic tac toe",
    href: "tictactoe",
    key: "tictactoe",
    src: "/images/tictactoe.png",
    title: "Tictactoe",
  },
  {
    active: true,
    alt: "Juego memo test",
    href: "memo-test",
    key: "memo-test",
    src: "/images/memoTest.png",
    title: "MemoTest",
  },
];
