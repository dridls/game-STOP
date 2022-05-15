import React from "react";
import { useGameContext } from "../contexts/gameContext";
import Start from "../components/Start";
import TimeLeft from "../components/TimeLeft";

const GameContent = () => {
  const { selectedLetter, gameStarted } = useGameContext();

  return (
    <>
      <header>
        <div className="selected-letter">Selected letter: {selectedLetter}</div>
        {!gameStarted ? <Start /> : <TimeLeft />}
      </header>
      <main>
        <div className="game-form">
          <form>
            <legend>Country</legend>
            <input type="text" disabled={!gameStarted}></input>
            <legend>Fruit</legend>
            <input type="text" disabled={!gameStarted}></input>
            <legend>Color</legend>
            <input type="text" disabled={!gameStarted}></input>
            <button className="stop-btn">STOP!</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default GameContent;
