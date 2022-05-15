import React, { useEffect, useState } from "react";
import { useGameContext } from "../contexts/gameContext";

const TimeLeft = () => {
  const { gameStarted } = useGameContext();
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
    }
    return () => clearTimeout(timeout);
  }, [timeLeft]);

  return <>{timeLeft <= 0 ? <h2>TIME'S UP!</h2> : <h2>{timeLeft}</h2>}</>;
};

export default TimeLeft;
