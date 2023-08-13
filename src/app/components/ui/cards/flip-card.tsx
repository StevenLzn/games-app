"use client";
import { useState } from "react";

type FlipCardProps = {
  backCardComponent: React.ReactNode;
  frontCardComponent: React.ReactNode;
};

export default function FlipCard({
  backCardComponent,
  frontCardComponent,
}: FlipCardProps) {
  const [showBackCard, setShowBackCard] = useState(true);
  const [flipCard, setFlipCard] = useState(false);

  const handleFlipCard = () => {
    if (flipCard === showBackCard) return;
    setFlipCard(!flipCard);
    setTimeout(() => {
      setShowBackCard(!showBackCard);
    }, 150);
  };

  return (
    <div className="group [perspective:1000px]" onClick={handleFlipCard}>
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
