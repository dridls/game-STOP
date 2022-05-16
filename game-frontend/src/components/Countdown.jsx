import React, { useEffect, useState } from "react";
import { useGameContext } from "../contexts/gameContext";

const Countdown = () => {
  const { setGameState } = useGameContext();
  const [readyCountdown, setReadyCountdown] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setGameState("STARTED");
    }, 4000);
  }, []);

  useEffect(() => {
    let timeout;
    if (readyCountdown > 0) {
      timeout = setTimeout(() => {
        setReadyCountdown(readyCountdown - 1);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [readyCountdown]);

  return (
    <>
      {readyCountdown <= 0 ? (
        <h2 className="go">GO!</h2>
      ) : (
        <h2 className="ready-countdown">{readyCountdown}</h2>
      )}
    </>
  );
};

export default Countdown;
