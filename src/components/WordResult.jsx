import React from "react";
import "../css/App.css";
import { useWord } from "../contexts/WordContexts";
import { FaPlay } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContexts";

const WordResult = () => {
  const theme = useTheme();
  const word = useWord();
  const isFound = word === "404";
  return (
    <div id="main-content" className="sizes">
      {isFound ? (
        <p>Not Found</p>
      ) : (
        <>
          <div id="word-header-container">
            <h1>{word[0].word}</h1>
            {word != "none" && (
              <div id="audio-container">
                <div id="audio" className={theme}>
                  <FaPlay style={{ color: "#A049DC", fontSize: "1.25rem" }} />
                </div>
              </div>
            )}
            <p id="phonetic">{word[0].phonetic}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default WordResult;
