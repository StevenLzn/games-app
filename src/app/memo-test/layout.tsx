import GameNav from "../components/game-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 items-center flex flex-col mx-0">
      <GameNav title="MEMOTEST" />
      {children}
    </div>
  );
}
