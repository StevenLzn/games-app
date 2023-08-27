"use client";
import { Game } from "../logic/GameState";
import {
  Character,
  CharacterMemoTest,
} from "../../api/rick-and-morty/character";
import MemoTestCard from "./memo-test-card";
import { useEffect, useRef, useState } from "react";
import { MoveStatus } from "../interfaces/MoveStatus.enum";

type MemoTestBoardProps = {
  characters: Character[];
  totalCharactersBoard: number;
};

export default function MemoTestBoard({
  characters,
  totalCharactersBoard,
}: MemoTestBoardProps) {
  const game = useRef(new Game(totalCharactersBoard));
  const [gameState, setGameState] = useState([...game.current.getBoard]);

  useEffect(() => {
    game.current.buildRandomBoard(characters);
    setGameState([...game.current.getBoard]);
  }, []);

  const handleClick = (character: CharacterMemoTest) => {
    const status = game.current.move(character);
    if (status === MoveStatus.NULL_MOVE || status === MoveStatus.END_GAME) {
      return;
    }
    const timeout = status === MoveStatus.WRONG_MOVE ? 1000 : 0;
    setGameState([...game.current.getBoard]);
    setTimeout(() => {
      setGameState([...game.current.getBoard]);
    }, timeout);
  };

  return (
    <div className="flex flex-col items-center w-full sm:w-1/2 md:w-2/5 xl:w-1/4">
      <div className="flex flex-col bg-white-100 text-black p-3 rounded-lg mt-4 shadow-lg  w-[215px]">
        <div className="text-center flex flex-row justify-evenly cursor-default">
          <p className="w-2/3 cursor-default">Movimientos</p>
          <p className="w-1/3 cursor-default">{game.current.getMoves}</p>
        </div>
        <p className="bg-white-100 text-black m-0 pt-3 text-center cursor-default">
          {game.current.getMessageStatus}
        </p>
      </div>
      <div className="mt-4 mx-0 flex flex-row flex-wrap justify-center ">
        {gameState.map((character, index) => (
          <MemoTestCard
            key={`${character.id}${index}`}
            character={character}
            onClick={() => handleClick(character)}
          />
        ))}
      </div>
    </div>
  );
}
