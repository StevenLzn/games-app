"use client";

import { AiFillCaretDown } from "react-icons/ai";
import { GameCardContainer, GameCardBox } from "./GameCardStyles";
import GameCardImage from "../../atoms/GameCardImage/GameCardImage";
import Subtitle from "../../atoms/Subtitle/Subtitle";


type GameCardProps = {
  text: string;
  src: string;
  alt: string;
  color?: string;
  onClick: () => void;
};

const GameCard: React.FC<GameCardProps> = ({ text, src, alt, onClick, color }) => {
  return (
    <GameCardBox onClick={onClick}>
      <GameCardContainer>
        <Subtitle text={text} color={color}></Subtitle>
        <GameCardImage src={src} alt={alt} height="100px" width="100%"></GameCardImage>
      </GameCardContainer>
      <div>
        <AiFillCaretDown />
      </div>
    </GameCardBox>
  );
};

export default GameCard;
