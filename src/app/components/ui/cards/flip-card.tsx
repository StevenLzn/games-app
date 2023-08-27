"use client";
import { useState, useEffect } from "react";

type FlipCardProps = {
  backCardComponent: React.ReactNode;
  frontCardComponent: React.ReactNode;
  showFrontCard?: boolean;
};

export default function FlipCard({
  backCardComponent,
  frontCardComponent,
  showFrontCard = false,
}: FlipCardProps) {
  const [showBackCard, setShowBackCard] = useState(!showFrontCard);
  const [flipCard, setFlipCard] = useState(false);

  useEffect(() => {
    setFlipCard(showFrontCard);
    setTimeout(() => {
      setShowBackCard(!showFrontCard);
    }, 150);
  }, [showFrontCard]);

  return (
    <div className="group [perspective:1000px]">
      <div
        className={`transition-all duration-500 [transform-style:preserve-3d] [transition: transform 0.4s] ${
          flipCard && "[transform:rotateY(180deg)]"
        } [backface-visibility:hidden] rounded-xl bg-gradient-to-r from-gray-700 from-5% to-green-900 cursor-pointer shadow-lg`}
      >
        {showBackCard ? backCardComponent : frontCardComponent}
      </div>
    </div>
  );
}
