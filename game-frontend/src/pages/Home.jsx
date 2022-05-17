import Letter from "../components/Letter";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../contexts/gameContext";
import { useEffect, useState } from "react";
import { ENDPOINT } from "../constants";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { CssBaseline } from "@mui/material";

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
    fetch(ENDPOINT + "/api/high-scores")
      .then((response) => response.json())
      .then((response) => setHighScores(response || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <CssBaseline />
      <div className="game-page">
        <div className="game-settings">
          <h2>How many rounds do you wanna play?</h2>
          <div className="number-of-rounds">
            <TextField
              id="outlined-number"
              label="Number of rounds"
              type="number"
              max="10"
              min="1"
              value={numberOfRounds}
              onChange={(e) => setNumberOfRounds(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                inputProps: { min: 1, max: 10 },
              }}
            />
          </div>
          <Letter />
          {selectedLetter && (
            <Button
              onClick={() => {
                setGameState("COUNTDOWN");
                navigate("/play");
              }}
              variant="contained"
            >
              Start game
            </Button>
          )}
        </div>

        <div className="high-scores">
          <h2>Here are the best players:</h2>

          <div className="name-list">
            {highScores.map((item) => (
              <div key={item.name} className="high-score">
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
      </div>
    </Container>
  );
}

export default App;
