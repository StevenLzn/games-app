import "server-only";
import { Character } from "./character";

const API_BASE_URL = "https://rickandmortyapi.com/api/character";

// TODO: llevar estas configuraciones a un archivo config del juego. Hacer un archivo config para cada juego
const TOTAL_CHARACTERS_API = 826;
const TOTAL_CHARACTERS_BOARD = 10; // 4x5 board

export async function getManyCharacters() {
  const ids: number[] | string[] = generateCharactersIds();
  const idsQuery: string = ids.join(",");
  const res = await fetch(`${API_BASE_URL}/${idsQuery}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Algo salió mal, intente más tarde");
  }

  const character = (await res.json()) as Character[];

  if (character.length === 0) {
    throw new Error("No se encontraron personajes con los ids suministrados");
  }

  return character;
}

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
