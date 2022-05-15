import React, { useEffect, useState } from "react";
import { useGameContext } from "../contexts/gameContext";

const Start = () => {
  const { setGameStarted } = useGameContext();
  const [readyCountdown, setReadyCountdown] = useState(3);
  const [countdownStarted, setCountdownStarted] = useState(false);

  const startGameHandler = () => {
    setCountdownStarted(true);
    setTimeout(() => {
      setGameStarted(true);
    }, 4000);
  };

  useEffect(() => {
    let timeout;
    if (readyCountdown > 0 && countdownStarted) {
      timeout = setTimeout(() => {
        setReadyCountdown(readyCountdown - 1);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [readyCountdown, countdownStarted]);

  return (
    <>
      {!countdownStarted ? (
        <button onClick={startGameHandler} className="start-btn">
          Start Game
        </button>
      ) : (
        <>{readyCountdown <= 0 ? <h2>GO!</h2> : <h2>{readyCountdown}</h2>}</>
      )}
    </>
  );
};

export default Start;
