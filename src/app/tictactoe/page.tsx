import GameLayout from "../components/templates/GameLayout/GameLayout";
import Board from "./TicTacToeBoard";
export default function TicTacToe() {
  return (
    <GameLayout title="Tic tac toe">
      <Board height={300} width={300} />
    </GameLayout>
  );
}
