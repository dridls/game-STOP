import React, { useEffect, useState } from "react";
import { useGameContext } from "../contexts/gameContext";
import Button from "@mui/material/Button";

const Letter = ({ startSearch, isSmall }) => {
  const { setSelectedLetter, setGameState } = useGameContext();
  const [randomLetter, setRandomLetter] = useState("");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [shouldStopLetterSearch, setShouldStopLetterSearch] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(startSearch);

  useEffect(() => {
    if (startSearch) {
      setTimeout(() => {
        setShouldStopLetterSearch(true);
      }, 4000);
    }
  }, [startSearch]);

  useEffect(() => {
    let timeout;

    if (shouldStopLetterSearch) {
      setSelectedLetter(randomLetter);
      if (!isSmall) {
        setGameState("COUNTDOWN");
      } else {
        setGameState("STARTED");
      }
    }
    if (!shouldStopLetterSearch && buttonClicked) {
      timeout = setTimeout(() => {
        setRandomLetter(alphabet[Math.floor(Math.random() * alphabet.length)]);
      }, 250);
    }

    return () => clearTimeout(timeout);
  }, [shouldStopLetterSearch, randomLetter, buttonClicked]);

  const letterHandler = () => {
    setButtonClicked(true);
    setTimeout(() => {
      setShouldStopLetterSearch(true);
    }, 4000);

    setRandomLetter(alphabet[Math.floor(Math.random() * alphabet.length)]);
  };

  return (
    <>
      {!randomLetter ? (
        <Button onClick={letterHandler} variant="contained">
          Select letter
        </Button>
      ) : (
        <h2 className={`${isSmall ? "small-random-letter" : "random-letter"}`}>
          {randomLetter}
        </h2>
      )}
    </>
  );
};

export default Letter;
