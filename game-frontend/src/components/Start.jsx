import React, { useEffect, useState } from "react";

const Start = () => {
  const [getReadyCountdown, setGetReadyCountdown] = useState(3);
  const startGameHandler = () => {
    let previous = 3;
    let startGame = false;

    setTimeout(() => {
      startGame = true;
    }, 3000);
    setInterval(() => {
      if (!startGame) {
        setGetReadyCountdown((previous = previous - 1));
      } else if (previous === 1) {
        setGetReadyCountdown("GO!");
      }
    }, 1000);
  };

  return (
    <>
      <button onClick={startGameHandler} className="start-btn">
        Start Game
      </button>
      <h2>{getReadyCountdown}</h2>
    </>
  );
};

export default Start;
