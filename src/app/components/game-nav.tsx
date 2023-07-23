import { AiFillHome } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
import IconButton from "./ui/buttons/icon-button";

export default function GameNav({ title }: { title: string }) {
  return (
    <nav className="flex justify-between w-5/6 sm:w-1/2 md:w-2/5 xl:w-1/4 mx-auto">
      <Link href={"/"}>
        <IconButton>
          <AiFillHome />
        </IconButton>
      </Link>
      <h1 className="text-xl text-black font-semibold leading-[44px] uppercase">
        {title}
      </h1>
      <IconButton>
        <IoSettingsSharp />
      </IconButton>
    </nav>
  );
}
