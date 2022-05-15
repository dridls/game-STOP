import GamePage from "./pages/game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { GameContextProvider } from "./contexts/gameContext";
import GameContent from "./pages/GameContent";

function App() {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="/play" element={<GameContent />} />
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
}

export default App;
