import Home from "./pages/Home";
import HighScore from "./pages/HighScore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { GameContextProvider } from "./contexts/gameContext";
import GameContent from "./pages/GameContent";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GameContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<GameContent />} />
            <Route path="/result" element={<HighScore />} />
          </Routes>
        </BrowserRouter>
      </GameContextProvider>
    </ThemeProvider>
  );
}

export default App;
