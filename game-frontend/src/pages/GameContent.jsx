import React from "react";
import { useGameContext } from "../contexts/gameContext";

const GameContent = () => {
  const { selectedLetter, readyCountdown, setReadyCountdown, setGameStarted } =
    useGameContext();

  return (
    <main>
      <div className="selected-letter">Selected letter: {selectedLetter}</div>
    </main>
  );
};

export default GameContent;
