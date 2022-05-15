import Letter from "../components/Letter";
import Start from "../components/Start";
import { useNavigate } from "react-router-dom";
import GameContent from "./GameContent.jsx";

import { useGameContext } from "../contexts/gameContext";
import { useEffect } from "react";

function App() {
  const { selectedLetter, gameStarted } = useGameContext();
  const navigate = useNavigate();

  console.log("selectedLetter", selectedLetter);
  return (
    <div className="App">
      <Letter />
      {selectedLetter && (
        <button onClick={() => navigate("/play")}>Start Game</button>
      )}
    </div>
  );
}

export default App;
