import Letter from "../components/Letter";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../contexts/gameContext";
import { useEffect } from "react";

function App() {
  const {
    selectedLetter,
    setSelectedLetter,
    setGameState,
    numberOfRounds,
    setNumberOfRounds,
  } = useGameContext();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedLetter("");
  }, []);

  return (
    <div className="App">
      <div>
        <h2>How many rounds do you wanna play?</h2>
        <input
          type="number"
          max="10"
          min="1"
          value={numberOfRounds}
          onChange={(e) => setNumberOfRounds(e.target.value)}
        />
      </div>
      <Letter />
      {selectedLetter && (
        <button
          className="letter-btn"
          onClick={() => {
            setGameState("COUNTDOWN");
            navigate("/play");
          }}
        >
          Start Game
        </button>
      )}
    </div>
  );
}

export default App;
