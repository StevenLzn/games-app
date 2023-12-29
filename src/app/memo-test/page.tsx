import { getManyCharacters } from "../api/rick-and-morty/getManyCharacters";
import MemoTestBoard from "./_components/memo-test-board";
import { CharacterMemoTest } from "../api/rick-and-morty/character";

const TOTAL_CHARACTERS_API = 826;
const TOTAL_CHARACTERS_BOARD = 10; // 4x5 board

export default async function Page() {
  const generateCharactersIds = () => {
    const charactersIds: number[] = [];
    let i = 0;

    while (i < TOTAL_CHARACTERS_BOARD) {
      const randomId = Math.floor(
        Math.random() * (TOTAL_CHARACTERS_API - 1 + 1) + 1
      );
      // Prevent repeated ids
      if (!charactersIds.includes(randomId)) {
        charactersIds.push(randomId);
        i++;
      }
    }
    return charactersIds;
  };

  const characters: CharacterMemoTest[] = await getManyCharacters(
    generateCharactersIds()
  );

  return (
    <MemoTestBoard
      characters={characters}
      totalCharactersBoard={TOTAL_CHARACTERS_BOARD}
    />
  );
}
