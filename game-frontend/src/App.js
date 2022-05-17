import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { GameContextProvider } from "./contexts/gameContext";
import GameContent from "./pages/GameContent";
import Result from "./pages/Result";
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
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </GameContextProvider>
    </ThemeProvider>
  );
}

export default App;
