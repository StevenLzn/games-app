"use client";
import { SubtitleWrapper } from "./SubtitleStyle";

export type SubtitleProps = {
  text: string;
  color?: string;
};

const Subtitle: React.FC<SubtitleProps> = ({
  text,
  color = "#343541",
}: SubtitleProps) => {
  console.log(text, color);

  return (
    <SubtitleWrapper text={text} color={color}>
      {text}
    </SubtitleWrapper>
  );
};

export default Subtitle;
