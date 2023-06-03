"use client";
import { TitleWrapper } from "./TitleStyle";

type TitleProps = {
  text: string;
};

const Title: React.FC<TitleProps> = ({ text }: TitleProps) => {
  return <TitleWrapper>{text}</TitleWrapper>;
};

export default Title;
