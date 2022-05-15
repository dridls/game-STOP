import React, { useContext, useState } from "react";

const GameContext = React.createContext();

export const GameContextProvider = ({ children }) => {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <GameContext.Provider
      value={{
        selectedLetter,
        gameStarted,
        setSelectedLetter,
        setGameStarted,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
