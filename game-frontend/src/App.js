import GamePage from "./pages/game";

import "./App.css";
import { GameContextProvider } from "./contexts/gameContext";

function App() {
  return (
    <GameContextProvider>
      <GamePage />
    </GameContextProvider>
  );
}

export default App;
