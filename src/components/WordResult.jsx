import React from "react";
import "../css/App.css";
import { useWord } from "../contexts/WordContexts";
import { useTheme } from "../contexts/ThemeContexts";
import ResultHeader from "./ResultHeader";

const WordResult = () => {
  const theme = useTheme();
  const word = useWord();
  return (
    <>
    {word !== "none" && (
      <div id="main-content" className="sizes">
      <ResultHeader word={word} theme={theme}/>
    </div>
    )}
    </>
    
    
  );
};

export default WordResult;
