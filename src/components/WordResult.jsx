import React from "react";
import "../css/App.css";
import { useWord } from "../contexts/WordContexts";

const WordResult = () => {
  const word = useWord();
  const isFound = word === "404";
  return (
    <div id="main-content" className="sizes">
      {isFound ? (
        <p>Not Found</p>
      ) : (
        <>
          <div id="word-header">
            <h1>{word[0].word}</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default WordResult;
