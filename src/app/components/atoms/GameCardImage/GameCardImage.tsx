"use client";

import { StyledGameCardImage } from "./GameCardImageStyle";

type ImageProps = {
  alt: string;
  src: string;
  height?: string;
  width?: string;
};

const GameCardImage: React.FC<ImageProps> = ({
  src,
  alt,
  height = "150px",
  width = "150px",
}) => {
  return (
    <StyledGameCardImage
      src={src}
      alt={alt}
      width={width}
      height={height}
    ></StyledGameCardImage>
  );
};

export default GameCardImage;
