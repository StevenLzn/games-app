import Image from "next/image";
import FlipCard from "./flip-card";
import { BsQuestionLg } from "react-icons/bs";

type MemoTestCardProps = {
  characterName: string;
  img: string;
};

export default function MemoTestCard({ ...props }: MemoTestCardProps) {
  return (
    <FlipCard
      backCardComponent={
        <div className="flex flex-col justify-between items-center cursor-pointer">
          <div className="bg-gray-700/50 mx-2 mt-2 mb-1 w-[100px] h-[100px] rounded flex items-center justify-center">
            <BsQuestionLg size={75} className="text-gray-100"></BsQuestionLg>
          </div>
          <h3 className="mb-1 text-gray-100 text-sm font-medium">Memo Test</h3>
        </div>
      }
      frontCardComponent={
        <div className="[transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between items-center rounded-xl bg-gradient-to-r from-gray-700 from-5% to-green-900 cursor-pointer shadow-lg">
          <Image
            className="rounded mx-2 mt-2 mb-1"
            src={props.img}
            alt={props.characterName}
            height={100}
            width={100}
            quality={85}
          />
          <h3 className="mb-1 text-gray-100 text-sm font-medium">
            {props.characterName}
          </h3>
        </div>
      }
    />
  );
}
