import React, { useContext, useState } from "react";
import countries from "../helpers/countries";
import fruitsAndVegetables from "../helpers/fruitsAndVegetables";
import colors from "../helpers/colors";
import { checkList } from "../helpers/checkList";

const GameContext = React.createContext();

export const GameContextProvider = ({ children }) => {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [points, setPoints] = useState(0);
  const [previousRounds, setPreviousRounds] = useState([]);
  const [numberOfRounds, setNumberOfRounds] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameState, setGameState] = useState();
  const [correctAnswer, setCorrectAnswer] = useState("true");

  const validatePoints = ({
    country,
    color,
    fruitVegetable,
    selectedLetter,
  }) => {
    const countryPoints = checkList(country, countries, selectedLetter);
    const fruitPoints = checkList(
      fruitVegetable,
      fruitsAndVegetables,
      selectedLetter
    );
    const colorPoints = checkList(color, colors, selectedLetter);
    let roundPoints = countryPoints + fruitPoints + colorPoints;
    if (roundPoints === 30) {
      roundPoints = roundPoints + timeLeft;
    }
    const totalPoints = points + roundPoints;

    setPoints(totalPoints);

    const roundSumary = {
      selectedLetter,
      country: {
        value: country,
        points: countryPoints,
      },
      fruitVegetable: {
        value: fruitVegetable,
        points: fruitPoints,
      },
      color: {
        value: color,
        points: colorPoints,
      },
      roundPoints,
    };

    setPreviousRounds([...previousRounds, roundSumary]);
  };

  return (
    <GameContext.Provider
      value={{
        selectedLetter,
        gameState,
        correctAnswer,
        points,
        previousRounds,
        numberOfRounds,
        timeLeft,
        setSelectedLetter,
        setGameState,
        setCorrectAnswer,
        validatePoints,
        setNumberOfRounds,
        setTimeLeft,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
