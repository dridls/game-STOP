import React, { useState } from "react";
import { useGameContext } from "../contexts/gameContext";
import Start from "../components/Start";
import TimeLeft from "../components/TimeLeft";
import countries from "../helpers/countries";
import fruitsAndVegetables from "../helpers/fruitsAndVegetables";

const GameContent = () => {
  const { selectedLetter, gameStarted } = useGameContext();
  const [country, setCountry] = useState("");
  const [fruitVegetable, setFruitVegetable] = useState("");
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
      return 10;
    }
    return 0;
  };

  const checkFruitsAndVegetables = () => {
    const isFruitsAndVegetablesValid = fruitsAndVegetables.some((item) =>
      item.toLowerCase().includes(fruitVegetable.toLowerCase())
    );

    if (
      fruitVegetable.length > 0 &&
      selectedLetter.toLowerCase() === fruitVegetable[0].toLowerCase() &&
      isFruitsAndVegetablesValid
    ) {
      return 10;
    }

    return 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const countryPoints = checkCountry();
    const fruitPoints = checkFruitsAndVegetables();

    setPoints(countryPoints + fruitPoints);
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
            <legend>Fruit or Vegetable</legend>
            <input
              type="text"
              required
              disabled={!gameStarted}
              value={fruitVegetable}
              onChange={(e) => setFruitVegetable(e.target.value)}
            />
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
