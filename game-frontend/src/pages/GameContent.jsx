import React, { useEffect, useState } from "react";
import { useGameContext } from "../contexts/gameContext";
import Countdown from "../components/Countdown";
import TimeLeft from "../components/TimeLeft";

import { useNavigate } from "react-router-dom";
import Letter from "../components/Letter";

const GameContent = () => {
  const navigate = useNavigate();
  const {
    selectedLetter,
    gameState,
    setGameState,
    validatePoints,
    points,
    previousRounds,
    numberOfRounds,
  } = useGameContext();
  const [country, setCountry] = useState("");
  const [fruitVegetable, setFruitVegetable] = useState("");
  const [color, setColor] = useState("");
  const [rounds, setRounds] = useState(0);

  useEffect(() => {
    if (rounds >= numberOfRounds) {
      navigate("/result");
    }
  }, [rounds, numberOfRounds]);

  const checkPoints = () => {
    validatePoints({ country, color, fruitVegetable, selectedLetter });

    setCountry("");
    setFruitVegetable("");
    setColor("");

    if (rounds >= numberOfRounds) return;

    setRounds(rounds + 1);
    setGameState("CHOOSING_LETTER");
  };

  useEffect(() => {
    if (gameState === "STOPPED") {
      checkPoints();
    }
  }, [gameState]);

  useEffect(() => {
    if (!selectedLetter) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setGameState("STOPPED");
  };

  return (
    <>
      <header className="game-header">
        <div className="selected-letter">
          <h6>The current letter is:</h6>
          <h2>{selectedLetter}</h2>
        </div>
        <div className="timer">
          {gameState === "COUNTDOWN" && <Countdown />}
          {gameState === "STARTED" && <TimeLeft />}
        </div>
        <div className="game-points">
          <h6>Total points:</h6>
          <h2>{points}</h2>
        </div>
      </header>
      <main>
        <div className="form-header">
          <div className="categories-header">
            <p className="category-title">LETTER</p>
            <p className="category-title">COUNTRY</p>
            <p className="category-title">FRUIT / VEGETABLE</p>
            <p className="category-title">COLOR</p>
            <p className="category-title">ROUND POINTS</p>
          </div>

          <div className="previous-rounds">
            {previousRounds.map((item) => (
              <div
                key={item.selectedLetter + item.color + item.country}
                className="previous-round"
              >
                <p className="category-info">{item.selectedLetter}</p>
                <p
                  className={`category-info ${
                    item.country.points === 0 && "wrong-answer"
                  }`}
                >
                  {item.country.value}
                </p>
                <p
                  className={`category-info ${
                    item.fruitVegetable.points === 0 && "wrong-answer"
                  }`}
                >
                  {item.fruitVegetable.value}
                </p>
                <p
                  className={`category-info ${
                    item.color.points === 0 && "wrong-answer"
                  }`}
                >
                  {item.color.value}
                </p>
                <p className="category-info">{item.roundPoints}</p>
              </div>
            ))}

            {rounds < numberOfRounds && (
              <form onSubmit={handleSubmit}>
                <div className="container">
                  {gameState === "CHOOSING_LETTER" &&
                  previousRounds.length > 0 ? (
                    <div className="selected-letter">
                      <Letter isSmall />
                    </div>
                  ) : (
                    <p className="selected-letter">{selectedLetter}</p>
                  )}
                  <input
                    className="field"
                    type="text"
                    required
                    disabled={gameState !== "STARTED"}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />

                  <input
                    className="field"
                    type="text"
                    required
                    disabled={gameState !== "STARTED"}
                    value={fruitVegetable}
                    onChange={(e) => setFruitVegetable(e.target.value)}
                  />

                  <input
                    className="field"
                    type="text"
                    required
                    disabled={gameState !== "STARTED"}
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />

                  {gameState === "STARTED" && (
                    <input className="stop-btn" type="submit" value="STOP!" />
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default GameContent;
