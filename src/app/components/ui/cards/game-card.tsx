import Image from "next/image";
import Link from "next/link";
import { AiFillCaretDown } from "react-icons/ai";

type GameCardProps = {
  text: string;
  src: string;
  alt: string;
  href: string;
};

export default function GameCard({ ...props }: GameCardProps) {
  return (
    <div className="px-2 pt-3 m-3 flex flex-col justify-between items-center rounded-xl bg-gray-700 cursor-pointer">
      <Link href={`/${props.href}`}></Link>
      <div className="p-[0.2rem] flex flex-col justify-between items-center rounded-md bg-black">
        <h2 className="mt-1 mb-2 text-gray-100 text-lg font-medium uppercase">
          {props.text}
        </h2>
        <Image
          className="rounded"
          src={props.src}
          alt={props.alt}
          height={100}
          width={120}
        />
      </div>
      <div className="">
        <AiFillCaretDown className="text-2xl" />
      </div>
    </div>
  );
}
