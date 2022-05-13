import React, { useEffect, useState } from "react";

const Letter = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [randomLetter, setRandomLetter] = useState("");
  let shouldStop = false;

  const letterHandler = () => {
    setTimeout(() => {
      shouldStop = true;
    }, 5000);
    setInterval(() => {
      if (!shouldStop) {
        setRandomLetter(alphabet[Math.floor(Math.random() * alphabet.length)]);
      }
    }, 250);
  };

  return (
    <>
      <button onClick={letterHandler} className="letter-btn">
        Select letter
      </button>
      <h2>{randomLetter}</h2>
    </>
  );
};

export default Letter;
