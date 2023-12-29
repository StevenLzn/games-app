import { getManyCharacters } from "../api/rick-and-morty/getManyCharacters";
import MemoTestBoard from "./_components/memo-test-board";
import { CharacterMemoTest } from "../api/rick-and-morty/character";

// TODO: llevar estas configuraciones a un archivo config del juego. Hacer un archivo config para cada juego
const TOTAL_CHARACTERS_BOARD = 10; // 4x5 board

export default async function Page() {


  const characters: CharacterMemoTest[] = await getManyCharacters();

  return (
    <MemoTestBoard
      characters={characters}
      totalCharactersBoard={TOTAL_CHARACTERS_BOARD}
    />
  );
}
