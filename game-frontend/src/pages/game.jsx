import Letter from "../components/Letter";
import Start from "../components/Start";
import { useNavigate } from "react-router-dom";
import GameContent from "./GameContent.jsx";

import { useGameContext } from "../contexts/gameContext";
import { useEffect } from "react";

function App() {
  const { selectedLetter, gameStarted } = useGameContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (gameStarted) {
      navigate("/play");
    }
  }, [gameStarted]);

  console.log("selectedLetter", selectedLetter);
  return (
    <div className="App">
      <Letter />
      {selectedLetter && <Start />}
    </div>
  );
}

export default App;
