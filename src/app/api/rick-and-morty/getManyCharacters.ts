import "server-only";
import { Character } from "./character";

const API_BASE_URL = "https://rickandmortyapi.com/api/character";

export async function getManyCharacters(ids: number[] | string[]) {
  console.log(ids);
  
  const idsQuery: string = ids.join(",");
  const res = await fetch(`${API_BASE_URL}/${idsQuery}`);
  if (!res.ok) {
    throw new Error("Algo salió mal, intente más tarde");
  }

  const character = (await res.json()) as Character[];

  if (character.length === 0) {
    throw new Error("No se encontraron personajes con los ids suministrados");
  }

  return character;
}
