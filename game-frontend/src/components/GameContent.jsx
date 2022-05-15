import React from "react";
import { useGameContext } from "../contexts/gameContext";

const GameContent = () => {
  const { readyCountdown, setReadyCountdown, setGameStarted } =
    useGameContext();

  return <p>YEAH</p>;
};

export default GameContent;
