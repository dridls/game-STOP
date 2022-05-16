import React, { useEffect, useState } from "react";
import { useGameContext } from "../contexts/gameContext";

const TimeLeft = () => {
  const { setGameState } = useGameContext();
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    setTimeout(() => {}, 60000);
  }, []);

  useEffect(() => {
    let timeout;
    if (timeLeft > 0) {
      timeout = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameState("STOPPED");
    }
    return () => clearTimeout(timeout);
  }, [timeLeft]);

  return (
    <>
      {timeLeft <= 0 ? (
        <h2 className="stop">TIME'S UP!</h2>
      ) : (
        <h2 className="time-left">{timeLeft}</h2>
      )}
    </>
  );
};

export default TimeLeft;
