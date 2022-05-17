import React, { useState } from "react";
import { useGameContext } from "../contexts/gameContext";

import { useNavigate } from "react-router-dom";
import { ENDPOINT } from "../constants";
import { Button, Container, CssBaseline } from "@mui/material";

const Result = () => {
  const navigate = useNavigate();
  const { points } = useGameContext();
  const [name, setName] = useState("");
  const handleSubmit = () => {
    fetch(ENDPOINT + "/api/new-high-score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: name,
        score: points,
      }),
    })
      .then((response) => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <CssBaseline />

      <div className="result-page">
        <p className="name">What is your name?</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="score">Your score: {points}</p>
        <Button variant="contained" onClick={handleSubmit}>
          Submit your result
        </Button>
      </div>
    </Container>
  );
};

export default Result;
