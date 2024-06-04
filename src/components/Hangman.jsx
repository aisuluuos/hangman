import React from "react";
const Hangman = ({ attemptsLeft }) => {
  const drawings = [
    `
         _____
        |     |
              |
              |
              |
              |
        ______|______
        `,
    `
         _____
        |     |
        O     |
              |
              |
              |
        ______|______
        `,
    `
         _____
        |     |
        O     |
        |     |
              |
              |
        ______|______
        `,
    `
         _____
        |     |
        O     |
       /|     |
              |
              |
        ______|______
        `,
    `
         _____
        |     |
        O     |
       /|\\    |
              |
              |
        ______|______
        `,
    `
         _____
        |     |
        O     |
       /|\\    |
       /      |
              |
        ______|______
        `,
    `
         _____
        |     |
        O     |
       /|\\    |
       / \\    |
              |
        ______|______
        `,
  ];
  return <pre className="hangman-drawing">{drawings[6 - attemptsLeft]}</pre>;
};

export default Hangman;
