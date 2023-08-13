import { getManyCharacters } from "../api/rick-and-morty/getManyCharacters";
import MemoTestCard from "../components/ui/cards/memo-test-card";

const TOTAL_CHARACTERS = 826;
const BOARD_SIZE = 10; // 4x5 board

export default async function Page() {
  const generateCharactersIds = () => {
    const charactersIds: number[] = [];
    let i = 0;

    while (i < BOARD_SIZE) {
      const randomId = Math.floor(
        Math.random() * (TOTAL_CHARACTERS - 1 + 1) + 1
      );
      // Prevent repeated ids
      if (!charactersIds.includes(randomId)) {
        charactersIds.push(randomId);
        i++;
      }
    }
    return charactersIds;
  };

  // TODO: Hacer una projection para que no me traiga datos innecesarios
  const characters = await getManyCharacters(generateCharactersIds());

  return (
    <div className="mt-4 mx-0 flex flex-row flex-wrap justify-center w-full sm:w-1/2 md:w-2/5 xl:w-1/4">
      {characters.map((character) => (
        <MemoTestCard characterName={character.name} img={character.image} />
      ))}
    </div>
  );
}
