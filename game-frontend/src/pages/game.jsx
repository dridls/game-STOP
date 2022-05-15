import Letter from "../components/Letter";
import Start from "../components/Start";
import GameContent from "../components/GameContent.jsx";

import { useGameContext } from "../contexts/gameContext";

function App() {
  const { selectedLetter, gameStarted } = useGameContext();

  console.log("selectedLetter", selectedLetter);
  return (
    <div className="App">
      <Letter />
      {selectedLetter && <Start />}
      {gameStarted && <GameContent />}
    </div>
  );
}

export default App;
