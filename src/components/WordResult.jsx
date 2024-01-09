import React, { useEffect, useState } from "react";
import "../css/App.css";
import { useWord } from "../contexts/WordContexts";
import { useTheme } from "../contexts/ThemeContexts";
import ResultHeader from "./ResultHeader";
import Meanings from "./Meanings";

const WordResult = () => {
  const theme = useTheme();
  const word = useWord();
  const meanings = word[0]?.meanings || [];

  return (
    <>
      {word !== "none" && (
        <div id="main-content" className="sizes">
          <ResultHeader word={word} theme={theme} />
          <div id="meanings-container">
            {meanings.map((meaning, index) => (
              <Meanings key={index} meaning={meaning} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default WordResult;
