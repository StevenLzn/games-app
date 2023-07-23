import GameNav from "../components/game-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 items-center flex flex-col my-2 mx-0">
      <GameNav title="TIC TAC TOE" />
      {children}
    </div>
  );
}
