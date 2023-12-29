"use client";
import Image from "next/image";
import FlipCard from "../../components/ui/cards/flip-card";
import { BsQuestionLg } from "react-icons/bs";
import { CharacterMemoTest } from "../../api/rick-and-morty/character";

type MemoTestCardProps = {
  character: CharacterMemoTest;
  onClick: () => void;
};

export default function MemoTestCard({
  character,
  onClick,
}: MemoTestCardProps) {
  return (
    <div className="m-1" onClick={onClick}>
      <FlipCard
        backCardComponent={
          <div className="flex flex-col justify-between items-center cursor-pointer">
            <div className="bg-gray-700/50 m-1 w-[70px] h-[70px] rounded-lg flex items-center justify-center">
              <BsQuestionLg size={75} className="text-gray-100"></BsQuestionLg>
            </div>
            <h3 className="mb-1 text-gray-100 text-xs font-light">Memo Test</h3>
          </div>
        }
        frontCardComponent={
          <div className="[transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between items-center rounded-xl bg-gradient-to-r from-gray-700 from-5% to-green-900 cursor-pointer shadow-lg">
            <Image
              className="rounded-lg m-1"
              src={character.image}
              alt={character.image}
              height={70}
              width={70}
              quality={85}
              priority
            />
            <h3 className="mb-1 text-gray-100 text-xs font-light w-[70px] text-center overflow-hidden text-ellipsis whitespace-nowrap">
              {character.name}
            </h3>
          </div>
        }
        showFrontCard={character.showFrontCard}
      />
    </div>
  );
}
