"use client";
import { useRouter } from 'next/navigation';
import IconButton from "../../atoms/IconButton/IconButton";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { GameMenuContainer } from "./GameMenuStyle";
import Title from "../../atoms/Title/Title";

type GameMenuProps = {
  title: string;
};

export const GameMenu = ({ title }: GameMenuProps) => {

  const router = useRouter();

  const handleOnChange = () => {
    console.log("change!");
  };

  const handleClick = () => {
    console.log("handle Click");
  };

  return (
    <GameMenuContainer>
      <IconButton onClick={() => router.push('/')}>
        <AiFillHome />
      </IconButton>
      <Title text={title}></Title>
      <IconButton onClick={handleClick}>
        <IoSettingsSharp />
      </IconButton>
    </GameMenuContainer>
  );
};
