import Letter from "../components/Letter";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../contexts/gameContext";
import { useEffect, useState } from "react";

function App() {
  const {
    selectedLetter,
    setSelectedLetter,
    setGameState,
    numberOfRounds,
    setNumberOfRounds,
  } = useGameContext();
  const [highScores, setHighScores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedLetter("");
  }, []);

  useEffect(() => {
    fetch("http://localhost:8765/api/high-scores")
      .then((response) => response.json())
      .then((response) => setHighScores(response || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="game-page">
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

      <div className="high-scores">
        <h2>Here are the best players:</h2>
      </div>
      <div className="name-list">
        {highScores.map((item) => (
          <div key={item.name} className="previous-round">
            <div className="player">
              <h5>Player</h5>
              <p>{item.name}</p>
            </div>
            <div className="score">
              <h5>Score</h5>
              <p>{item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
