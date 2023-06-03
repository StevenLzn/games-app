interface State {
  move(game: Game, clientX: number, clientY: number, position: number): string;
}

export class Game {
  private state: State;
  private board: Array<string>;
  private winner: string | null;
  private context: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private currentPlayer: string;
  private messageStatus: string;
  public winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.board = Array(9).fill(null);
    this.winner = null;
    this.context = context;
    this.currentPlayer = this.getRandomInitPlayer();
    this.state = this.currentPlayer === 'X' ? new TurnPlayerXState() : new TurnPlayerOState();
    this.messageStatus = `Turno del jugador ${this.currentPlayer}`;
    this.canvas = canvas;
  }

  set setState(state: State) {
    this.state = state;
  }

  set setCurrentPlayer(player: string) {
    this.currentPlayer = player;
  }

  set setWinner(winner: string) {
    this.winner = winner;
  }

  set setMessageStatus(message: string) {
    this.messageStatus = message;
  }

  get getWinner(): string | null {
    return this.winner;
  }

  get getMessageStatus(): string {
    return this.messageStatus;
  }

  get getCurrentPlayer(): string {
    return this.currentPlayer;
  }

  get getContext(): CanvasRenderingContext2D {
    return this.context;
  }

  get getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  get getBoard(): Array<string> {
    return this.board;
  }

  getRandomInitPlayer(): string {
    const randNumber = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    return randNumber === 1 ? "X" : "O";
  }

  move(pointX: number, pointY: number, position: number): string {
    return this.state.move(this, pointX, pointY, position);
  }

  setMoveBoard(player: string, position: number) {
    this.board[position] = player;
  }

  // Ir filtrando y si no hay opciones de ganar, declarar empate, así haya más casillas por poner
  checkIsWinner(position: number) {
    const winOptions = this.winCombinations.filter((combination) =>
      combination.some(
        (combinationPosition) => combinationPosition === position
      )
    );

    let winningCount = 0;
    for (const option of winOptions) {
      for (const position of option) {
        if (this.getBoard[position] === this.currentPlayer) {
          winningCount++;
        }
      }
      if (winningCount === 3) return true;
      winningCount = 0;
    }

    return false;
  }

  // Dibujar línea ganadora
  drawWinnerLine(context: CanvasRenderingContext2D) {
    context?.beginPath();
  }
}

class TurnPlayerXState implements State {
  move(game: Game, pointX: number, pointY: number, position: number): string {
    const context = game.getContext;
    if (game.getBoard[position] !== null) return game.getMessageStatus;
    const drawPointX = pointX + 15;
    const drawPointY = pointY + 15;
    context.strokeStyle = "#739BFF";
    context?.beginPath();
    context?.moveTo(drawPointX, drawPointY);
    context?.lineTo(drawPointX + 70, drawPointY + 70);
    context?.moveTo(drawPointX, drawPointY + 70);
    context?.lineTo(drawPointX + 70, drawPointY);
    context?.stroke();
    game.setMoveBoard("X", position);
    if (game.checkIsWinner(position)) {
      game.setWinner = game.getCurrentPlayer;
      game.setMessageStatus = `Ha ganado el jugador ${game.getWinner}`;
      game.setState = new WinnerState();
    } else {
      game.setCurrentPlayer = "O";
      game.setMessageStatus = `Turno del jugador ${game.getCurrentPlayer}`;
      game.setState = new TurnPlayerOState();
    }
    return game.getMessageStatus;
  }
}

class TurnPlayerOState implements State {
  move(game: Game, pointX: number, pointY: number, position: number): string {
    const context = game.getContext;
    if (game.getBoard[position] !== null) return game.getMessageStatus;
    const drawPointX = pointX + 50;
    const drawPointY = pointY + 50;
    context.strokeStyle = "#FF6262";
    context.beginPath();
    context.arc(drawPointX, drawPointY, 35, 0, 2 * Math.PI);
    context.stroke();
    game.setMoveBoard("O", position);
    if (game.checkIsWinner(position)) {
      game.setWinner = game.getCurrentPlayer;
      game.setMessageStatus = `Ha ganado el jugador ${game.getWinner}`;
      game.setState = new WinnerState();
    } else {
      game.setCurrentPlayer = "X";
      game.setMessageStatus = `Turno del jugador ${game.getCurrentPlayer}`;
      game.setState = new TurnPlayerXState();
    }
    return game.getMessageStatus;
  }
}

class WinnerState implements State {
  move(game: Game, clientX: number, clientY: number): string {
    return game.getMessageStatus;
  }
}
