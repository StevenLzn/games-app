"use client";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Game } from "./GameState";
import Button from "../components/atoms/Button/Button";
import style from "./TicTacToeBoard.module.css";

type BoardProps = {
  height: number;
  width: number;
};

const TicTacToeBoard = ({ height, width }: BoardProps) => {
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
      const modX = x % 100; // TODO: este valor no debería estar quemado. Debe ser con respecto al width establecido(puede variar)
      const modY = y % 100; // TODO: este valor no debería estar quemado. Debe ser con respecto al width establecido(puede variar)
      const position = (2 * (y - modY) + (x - modX + y - modY)) / 100; // TODO: este valor no debería estar quemado. Debe ser con respecto al width establecido(puede variar)
      const pointX = x - modX;
      const pointY = y - modY;
      const messageStatus = game?.move(pointX, pointY, position);
      setMessageStatus(messageStatus); // TODO: establecer mensaje de empate
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
    if (game?.getWinner === player) return style.winner;
    if (game?.getCurrentPlayer === player) return style.turn;
    return style.default;
  };

  return (
    <>
      <div className={style.statusContainer}>
        <div className={style.playersContainer}>
          <p className={`${style.player} ${style.playerX} ${getPlayerClass("X")}`}>X</p>
          <p className={`${style.player} ${style.playerY} ${getPlayerClass("O")}`}>O</p>
        </div>
        <p className={style.messageStatus}>{messageStatus}</p>
      </div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onClick={handleBoardClick}
        className={style.board}
      ></canvas>
      <div className={style.actionsContainer}>
        <Button onClick={resetGame} text="Reiniciar" />
      </div>
    </>
  );
};

export default TicTacToeBoard;
