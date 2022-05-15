import React, { useEffect, useState } from "react";
import { useGameContext } from "../contexts/gameContext";

const Letter = () => {
  const { setSelectedLetter } = useGameContext();
  const [randomLetter, setRandomLetter] = useState("");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [shouldStopLetterSearch, setShouldStopLetterSearch] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    let timeout;

    if (shouldStopLetterSearch) {
      setSelectedLetter(randomLetter);
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
      {!randomLetter && (
        <button onClick={letterHandler} className="letter-btn">
          Select letter
        </button>
      )}
      <h2>{randomLetter}</h2>
    </>
  );
};

export default Letter;
