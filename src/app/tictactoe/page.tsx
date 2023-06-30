import GameLayout from "../components/templates/GameLayout/GameLayout";
import TicTacToeBoard from "./TicTacToeBoard";
export default function TicTacToe() {
  return (
    <GameLayout title="Tic tac toe">
      <TicTacToeBoard height={300} width={300} />
    </GameLayout>
  );
}
