import React, { useState } from "react";
import { useGameContext } from "../contexts/gameContext";
import Start from "../components/Start";
import TimeLeft from "../components/TimeLeft";
import countries from "../helpers/countries";

const GameContent = () => {
  const { selectedLetter, gameStarted } = useGameContext();
  const [country, setCountry] = useState("");
  const [points, setPoints] = useState(0);

  const checkCountry = () => {
    const isCountryValid = countries.some((countryItem) =>
      countryItem.name.toLowerCase().includes(country.toLowerCase())
    );

    if (
      country.length > 0 &&
      selectedLetter.toLowerCase() === country[0].toLowerCase() &&
      isCountryValid
    ) {
      setPoints(points + 10);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    checkCountry();
  };

  return (
    <>
      <header>
        <div className="selected-letter">Selected letter: {selectedLetter}</div>
        <div className="game-points">Your Points: {points}</div>
        {!gameStarted ? <Start /> : <TimeLeft />}
      </header>
      <main>
        <div className="game-form">
          <form onSubmit={handleSubmit}>
            <legend>Country</legend>
            <input
              type="text"
              required
              disabled={!gameStarted}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <legend>Fruit</legend>
            <input type="text" required disabled={!gameStarted} />
            <legend>Color</legend>
            <input type="text" required disabled={!gameStarted} />
            <input className="stop-btn" type="submit" value="STOP!" />
          </form>
        </div>
      </main>
    </>
  );
};

export default GameContent;
