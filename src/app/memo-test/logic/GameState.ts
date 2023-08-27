import { CharacterMemoTest } from "../../api/rick-and-morty/character";
import { MoveStatus } from "../interfaces/MoveStatus.enum";

interface State {
  move(game: Game, character: CharacterMemoTest): MoveStatus;
}

export class Game {
  private state: State;
  private board: CharacterMemoTest[];
  private totalCharactersBoard: number;
  private boardSize: number;
  private totalMoves: number;
  private characterSelected: CharacterMemoTest | null;

  constructor(totalCharactersBoard: number) {
    this.state = new FirstSelectionState();
    this.totalCharactersBoard = totalCharactersBoard;
    this.boardSize = totalCharactersBoard * 2;
    this.board = [];
    this.totalMoves = 0;
    this.characterSelected = null;
  }

  get getBoard(): CharacterMemoTest[] {
    return this.board;
  }

  set setState(state: State) {
    this.state = state;
  }

  get getCharacterSelected(): CharacterMemoTest | null {
    return this.characterSelected;
  }

  set setCharacterSelected(character: CharacterMemoTest | null) {
    this.characterSelected = character;
  }

  get getMoves(): number {
    return this.totalMoves;
  }

  addMove(): void {
    this.totalMoves++;
  }

  move(character: CharacterMemoTest) {
    return this.state.move(this, character);
  }

  buildRandomBoard(characters: CharacterMemoTest[]) {
    const board: CharacterMemoTest[] = [];
    let i = 0;
    while (i < this.totalCharactersBoard) {
      let j = 0;
      while (j < 2) {
        const randomPosition = Math.floor(Math.random() * this.boardSize);

        if (!board[randomPosition]) {
          board[randomPosition] = {
            gameCharacterId: `${randomPosition}${characters[i].id}`,
            ...characters[i],
          };
          j++;
        }
      }
      i++;
    }
    this.board = board;
  }
}

class FirstSelectionState implements State {
  move(game: Game, character: CharacterMemoTest): MoveStatus {
    if (game.getCharacterSelected != null || character.isDiscovered) {
      return MoveStatus.NULL_MOVE;
    }

    character.showFrontCard = true;
    game.setCharacterSelected = character;
    game.setState = new PairSelectionState();
    return MoveStatus.FIRST_MOVE;
  }
}

class PairSelectionState implements State {
  move(game: Game, character: CharacterMemoTest): MoveStatus {
    const moveStatus: MoveStatus = this.verifyStatus(
      game,
      character,
      game.getCharacterSelected!
    );
    character.showFrontCard = true;

    if (moveStatus === MoveStatus.WRONG_MOVE) {
      setTimeout(() => {
        character.showFrontCard = false;
        game.getCharacterSelected!.showFrontCard = false;
        game.setCharacterSelected = null;
      }, 900);
    } else if (moveStatus === MoveStatus.NULL_MOVE) {
      return moveStatus;
    }
    game.addMove();
    game.setState = new FirstSelectionState();
    return moveStatus;
  }

  verifyStatus(
    game: Game,
    characterA: CharacterMemoTest,
    characterB: CharacterMemoTest
  ): MoveStatus {
    let moveStatus: MoveStatus = MoveStatus.WRONG_MOVE;
    if (characterA.isDiscovered) {
      moveStatus = MoveStatus.NULL_MOVE;
    } else if (characterA.id === characterB.id) {
      if (characterA.gameCharacterId !== characterB.gameCharacterId) {
        characterA.isDiscovered = true;
        characterB.isDiscovered = true;
        moveStatus = MoveStatus.CORRECT_MOVE;
        game.setCharacterSelected = null;
      } else {
        moveStatus = MoveStatus.NULL_MOVE;
      }
    }
    return moveStatus;
  }
}

class WinState implements State {
  move(game: Game, character: CharacterMemoTest): MoveStatus {
    game.addMove();
    return MoveStatus.END_GAME;
  }
}
