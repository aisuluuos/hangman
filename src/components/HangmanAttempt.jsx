import React, { useState } from "react";
import Hangman from "./Hangman";
import AddWord from "./AddWord";
import AddLetter from "./AddLetter";
import { Button } from "@mui/material";
const words = [
  "javaScript",
  "react",
  "html",
  "css",
  "dom",
  "python",
  "java",
  "iceland",
  "car",
  "home",
  "dress",
];
const HangmanAttempt = () => {
  const [word, setWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [gameOver, setGameOver] = useState(false);

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setRemainingAttempts(remainingAttempts - 1);
      }
    }

    if (remainingAttempts === 1) {
      setGameOver(true);
    }
  };

  const isGameWon = () => {
    return word.split("").every((letter) => guessedLetters.includes(letter));
  };

  const getMessage = () => {
    if (isGameWon()) {
      return "Congratulations! You won!";
    } else if (remainingAttempts === 0) {
      return "Game over! You lost!";
    } else {
      return `Remaining attempts: ${remainingAttempts}`;
    }
  };

  return (
    <div className="hangman-game">
      <h1>Hangman Game</h1>
      <AddWord word={word} guessedLetters={guessedLetters} />
      <Hangman attemptsLeft={remainingAttempts} />
      <AddLetter onSubmit={handleGuess} />
      <p>{getMessage()}</p>
      {gameOver && (
        <Button onClick={() => window.location.reload()}>Play Again</Button>
      )}
    </div>
  );
};

export default HangmanAttempt;
