import React from "react";

const AddWord = ({ word, guessedLetters }) => {
  return (
    <div className="word">
      {word.split("").map((letter, index) => (
        <span className="letter" key={index}>
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default AddWord;
