import React, { useState } from "react";
import { Button } from "@mui/material";

const AddLetter = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue.toLowerCase());
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength="1"
        value={inputValue}
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddLetter;
