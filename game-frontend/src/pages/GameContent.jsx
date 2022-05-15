import React, { useEffect, useState } from "react";
import { useGameContext } from "../contexts/gameContext";
import Start from "../components/Start";
import TimeLeft from "../components/TimeLeft";
import countries from "../helpers/countries";
import fruitsAndVegetables from "../helpers/fruitsAndVegetables";
import colors from "../helpers/colors";
import { useNavigate } from "react-router-dom";
import { checkList } from "../helpers/checkList";
import Letter from "../components/Letter";

const GameContent = () => {
  const navigate = useNavigate();
  const { selectedLetter, gameStarted, stopped, setStopped } = useGameContext();
  const [country, setCountry] = useState("");
  const [fruitVegetable, setFruitVegetable] = useState("");
  const [color, setColor] = useState("");
  const [points, setPoints] = useState(0);
  const [previousRounds, setPreviousRounds] = useState([]);

  const checkPoints = () => {
    const countryPoints = checkList(country, countries, selectedLetter);
    const fruitPoints = checkList(
      fruitVegetable,
      fruitsAndVegetables,
      selectedLetter
    );
    const colorPoints = checkList(color, colors, selectedLetter);
    const roundPoints = points + countryPoints + fruitPoints + colorPoints;
    setPoints(roundPoints);
    const roundSumary = {
      selectedLetter,
      country,
      fruitVegetable,
      color,
    };
    setPreviousRounds([...previousRounds, roundSumary]);
    setCountry("");
    setFruitVegetable("");
    setColor("");
  };

  useEffect(() => {
    if (stopped) {
      checkPoints();
    }
  }, [stopped]);

  useEffect(() => {
    if (!selectedLetter) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    checkPoints();
    setStopped(true);
  };

  return (
    <>
      <header>
        <h2 className="selected-letter">Selected letter: {selectedLetter}</h2>
        <h2 className="game-points">Your Points: {points}</h2>
        {!stopped && <>{!gameStarted ? <Start /> : <TimeLeft />}</>}
      </header>
      <main>
        <div className="game-form">
          <div className="categories-header">
            <p className="category-title">LETTER</p>
            <p className="category-title">COUNTRY</p>
            <p className="category-title">FRUIT / VEGETABLE</p>
            <p className="category-title">COLOR</p>
          </div>

          <div className="previous-rounds">
            {previousRounds.map((item) => (
              <div className="previous-round">
                <p className="category-info">{item.selectedLetter}</p>
                <p className="category-info">{item.country}</p>
                <p className="category-info">{item.fruitVegetable}</p>
                <p className="category-info">{item.color}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <Letter />
            <input
              className="field"
              type="text"
              required
              disabled={!gameStarted}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />

            <input
              className="field"
              type="text"
              required
              disabled={!gameStarted}
              value={fruitVegetable}
              onChange={(e) => setFruitVegetable(e.target.value)}
            />

            <input
              className="field"
              type="text"
              required
              disabled={!gameStarted}
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />

            {gameStarted && (
              <input className="stop-btn" type="submit" value="STOP!" />
            )}
          </form>
        </div>
      </main>
    </>
  );
};

export default GameContent;
