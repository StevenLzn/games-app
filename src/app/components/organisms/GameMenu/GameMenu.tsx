"use client";
import IconButton from "../../atoms/IconButton/IconButton";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { GameMenuContainer } from "./GameMenuStyle";
import Title from "../../atoms/Title/Title";

type GameMenuProps = {
  title: string;
};

export const GameMenu = ({ title }: GameMenuProps) => {
  const handleOnChange = () => {
    console.log("change!");
  };

  const handleClick = () => {
    console.log("handle Click");
  };

  return (
    <GameMenuContainer>
      <IconButton onClick={() => console.log("click")}>
        <AiFillHome />
      </IconButton>
      <Title text={title}></Title>
      <IconButton onClick={handleClick}>
        <IoSettingsSharp />
      </IconButton>
    </GameMenuContainer>
  );
};
