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
  private winCombinations: number[][];
  private winnerCombination: number[];

  constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.board = Array(9).fill(null);
    this.winner = null;
    this.context = context;
    this.currentPlayer = this.getRandomInitPlayer();
    this.state =
      this.currentPlayer === "X"
        ? new TurnPlayerXState()
        : new TurnPlayerOState();
    this.messageStatus = `Turno del jugador ${this.currentPlayer}`;
    this.canvas = canvas;
    this.winCombinations = this.getWinCombinationsInit;
    this.winnerCombination = [];
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

  get getWinnerCombination(): number[] {
    return this.winnerCombination;
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

  get getWinCombinationsInit(): number[][] {
    return [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  get getWinCombinations(): number[][] {
    return this.winCombinations;
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

  checkIsWinner(positionMove: number): boolean {
    const winOptions = this.winCombinations.filter((combination) =>
      combination.some(
        (combinationPosition) => combinationPosition === positionMove
      )
    );
    let winningCount = 0;
    for (const option of winOptions) {
      for (const position of option) {
        if (this.getBoard[position] === this.currentPlayer) {
          winningCount++;
        } else if (this.getBoard[position]) {
          this.winCombinations = this.winCombinations.filter(
            (possibility) =>
              !possibility.every((element, index) => element == option[index])
          );
        }
      }
      if (winningCount === 3) {
        this.winnerCombination = option;
        return true;
      }

      winningCount = 0;
    }

    return false;
  }

  drawWinnerLine() {
    if (this.context) {
      const initPointXCalc = (this.winnerCombination[0] % 3) * 100;
      const initPointYCalc = Math.floor(this.winnerCombination[0] / 3) * 100;
      const endPointXCalc = (this.winnerCombination[2] % 3) * 100;
      const endPointYCalc = Math.floor(this.winnerCombination[2] / 3) * 100;

      const { initPointX, initPointY, endPointX, endPointY } =
        this.resizePoints(
          initPointXCalc,
          initPointYCalc,
          endPointXCalc,
          endPointYCalc
        );
      this.animatedDraw(initPointX, initPointY, endPointX, endPointY);
    }
  }

  resizePoints(
    initPointX: number,
    initPointY: number,
    endPointX: number,
    endPointY: number
  ): {
    initPointX: number;
    initPointY: number;
    endPointX: number;
    endPointY: number;
  } {
    if (initPointX === endPointX) {
      endPointX += endPointX === 200 && initPointX != 200 ? 100 : 0;
      endPointY += endPointY === 200 && initPointY != 200 ? 100 : 0;
      initPointX += 50;
      endPointX += 50;
    } else if (initPointY === endPointY) {
      endPointX += endPointX === 200 && initPointX != 200 ? 100 : 0;
      endPointY += endPointY === 200 && initPointY != 200 ? 100 : 0;
      initPointY += 50;
      endPointY += 50;
    } else {
      endPointX += endPointX === 200 ? 100 : 0;
      endPointY += endPointY === 200 ? 100 : 0;
      initPointX += initPointX === 200 ? 100 : 0;
    }

    return {
      initPointX,
      initPointY,
      endPointX,
      endPointY,
    };
  }

  animatedDraw(
    initPointX: number,
    initPointY: number,
    endPointX: number,
    endPointY: number
  ) {
    let movement = 0; // movimiento entre frames (lo que aumenta en cada ciclo). Va acumulando
    const movementBase = 0.05; // El aumento por defecto
    const fps = 60; // frames per second
    let count = 0; // conteo de ciclos
    const context = this.context;

    // Se inicializa la línea al inicio desde donde se va a dibujar
    context.beginPath();
    context.strokeStyle = "#fbec39bd";
    context.lineWidth = 15;
    context.moveTo(initPointX, initPointY);

    // Método interno, se hizo esto porque el requestAnimationFrame recibe una función sin parámetros
    // Y si se llamaba animatedDraw como tenía 4 parámetros, sacaba error
    function animate() {
      // setTimeout para controlar los fps
      setTimeout(() => {
        // Si el conteo de ciclos es igual a 1 dividido los aumentos base del movimiento
        // Entonces se detiene la ejecución de la animación
        // 1 representa 1 segundo
        if (count === Math.round(1 / movementBase)) {
          return;
        }
        // informa al navegador que se quiere realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación
        // recibe la función de dibujado como parámetro (esta función no debe tener parámetros)
        requestAnimationFrame(animate);
        movement += movementBase; // Se le suma el aumento base por defecto
        count++;
        // Se dibuja la línea, que tras cada ciclo va aumentando el tamaño hasta alcanzar el punto final
        context.lineTo(
          initPointX + (endPointX - initPointX) * movement,
          initPointY + (endPointY - initPointY) * movement
        );
        context.stroke();

        // Se mueve el puntero hasta donde se dibujó el trazo de la línea. Es decir, si se dibujó hasta el punto 100, se mueve el puntero hasta el punto 100, para luego dibujar de 100 a 200
        // Esto se hace para que no sea siempre el mismo inicio y se repinte la línea, porque si no se hace toma siempre por ejemplo el punto 0 a 100, luego 0 a 200 y siempre se sobre escribe la línea
        context.beginPath();
        context.moveTo(
          initPointX + (endPointX - initPointX) * movement,
          initPointY + (endPointY - initPointY) * movement
        );
      }, 1000 / fps);
    }
    animate(); // Se llama la función por primera vez para que inicie la animación
  }
}

class TurnPlayerXState implements State {
  move(game: Game, pointX: number, pointY: number, position: number): string {
    const context = game.getContext;
    if (game.getBoard[position] !== null) return game.getMessageStatus;
    const drawPointX = pointX + 15;
    const drawPointY = pointY + 15;
    context.strokeStyle = "#1349CD";
    context?.beginPath();
    context?.moveTo(drawPointX, drawPointY);
    context?.lineTo(drawPointX + 70, drawPointY + 70);
    context?.moveTo(drawPointX, drawPointY + 70);
    context?.lineTo(drawPointX + 70, drawPointY);
    context?.stroke();
    game.setMoveBoard("X", position);
    this.setNextState(game, position);
    return game.getMessageStatus;
  }

  setNextState(game: Game, position: number) {
    if (game.checkIsWinner(position)) {
      game.setWinner = game.getCurrentPlayer;
      game.setMessageStatus = `Ha ganado el jugador ${game.getWinner}`;
      game.setState = new EndGameState();
      game.drawWinnerLine();
    } else if (game.getWinCombinations.length <= 1) {
      game.setMessageStatus = `Empate, reinicia el juego`;
      game.setState = new EndGameState();
    } else {
      game.setCurrentPlayer = "O";
      game.setMessageStatus = `Turno del jugador ${game.getCurrentPlayer}`;
      game.setState = new TurnPlayerOState();
    }
  }
}

class TurnPlayerOState implements State {
  move(game: Game, pointX: number, pointY: number, position: number): string {
    const context = game.getContext;
    if (game.getBoard[position] !== null) return game.getMessageStatus;
    const drawPointX = pointX + 50;
    const drawPointY = pointY + 50;
    context.strokeStyle = "#DB0000";
    context.beginPath();
    context.arc(drawPointX, drawPointY, 35, 0, 2 * Math.PI);
    context.stroke();
    game.setMoveBoard("O", position);
    this.setNextState(game, position);
    return game.getMessageStatus;
  }

  setNextState(game: Game, position: number) {
    if (game.checkIsWinner(position)) {
      game.setWinner = game.getCurrentPlayer;
      game.setMessageStatus = `Ganador el jugador ${game.getWinner}`;
      game.setState = new EndGameState();
      game.drawWinnerLine();
    } else if (game.getWinCombinations.length <= 1) {
      game.setMessageStatus = `Empate, reinicia el juego`;
      game.setState = new EndGameState();
    } else {
      game.setCurrentPlayer = "X";
      game.setMessageStatus = `Turno del jugador ${game.getCurrentPlayer}`;
      game.setState = new TurnPlayerXState();
    }
  }
}

class EndGameState implements State {
  move(game: Game, clientX: number, clientY: number): string {
    return game.getMessageStatus;
  }
}
