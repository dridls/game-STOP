import Letter from "../components/Letter";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../contexts/gameContext";

function App() {
  const { selectedLetter } = useGameContext();
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
