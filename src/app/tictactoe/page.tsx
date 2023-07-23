"use client";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Game } from "./logic/GameState";
import Button from "../components/ui/buttons/button";

const Page = () => {
  const width = 300;
  const height = 300;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [messageStatus, setMessageStatus] = useState<string | undefined>();
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    initGame();
  }, []);

  const initGame = (): void => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (canvas && context) {
      context.lineWidth = 5;
      context.strokeStyle = "#343541";
      const newGame = new Game(context, canvas);
      setGame(newGame);
      setMessageStatus(newGame?.getMessageStatus);
      context?.beginPath();
      context?.moveTo(width / 3, 0);
      context?.lineTo(width / 3, height);
      context?.moveTo((width / 3) * 2, 0);
      context?.lineTo((width / 3) * 2, height);
      context?.moveTo(0, height / 3);
      context?.lineTo(width, height / 3);
      context?.moveTo(0, (height / 3) * 2);
      context?.lineTo(width, (height / 3) * 2);
      context?.stroke();
    }
  };

  const handleBoardClick: MouseEventHandler<HTMLCanvasElement> = (event) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (canvas && context) {
      context.lineWidth = 10;
      const rect = canvas?.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const modX = x % 100;
      const modY = y % 100;
      const position = (2 * (y - modY) + (x - modX + y - modY)) / 100;
      const pointX = x - modX;
      const pointY = y - modY;
      const messageStatus = game?.move(pointX, pointY, position);
      setMessageStatus(messageStatus);
    }
  };

  const resetGame = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (canvas && context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      initGame();
    }
  };

  const getPlayerClass = (player: string) => {
    if (game?.getWinner === player) return "bg-green";
    if (game?.getCurrentPlayer === player) return "bg-yellow";
    return "bg-white-100";
  };

  return (
    <>
      <div className="rounded-lg mt-4 mx-0 w-[225px] shadow-lg">
        <div className="flex justify-evenly">
          <p
            className={`rounded-lg text-6xl	font-bold m-0 p-4 text-center w-1/2 text-blue mr-0.5 ${getPlayerClass(
              "X"
            )}`}
          >
            X
          </p>
          <p
            className={`rounded-lg text-6xl	font-bold m-0 p-4 text-center w-1/2 text-red ${getPlayerClass(
              "O"
            )}`}
          >
            O
          </p>
        </div>
        <p className="bg-white-100 text-black m-0 p-3 text-center">
          {messageStatus}
        </p>
      </div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onClick={handleBoardClick}
        className="mt-4 mx-0"
      ></canvas>
      <div className="mt-6 mx-0">
        <Button onClick={resetGame}>Reiniciar</Button>
      </div>
    </>
  );
};

export default Page;
