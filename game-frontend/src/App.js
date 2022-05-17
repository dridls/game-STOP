import GamePage from "./pages/gamePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { GameContextProvider } from "./contexts/gameContext";
import GameContent from "./pages/GameContent";
import Result from "./pages/result";

function App() {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="/play" element={<GameContent />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
}

export default App;
