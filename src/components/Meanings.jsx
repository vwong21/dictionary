import React from "react";
import "../css/App.css";

const Meanings = ({ meaning, index }) => {
  return (
    <div key={index} className="individual-meaning">
      <div id="part-of-speech-container">
        <strong id="part-of-speech">{meaning.partOfSpeech}</strong>
        <hr></hr>
      </div>
      <p id="meaning-tag">Meaning</p>
      <ul id="definitions-container">
        {meaning.definitions.slice(0, 3).map((definition, index) => (
          <li key={index}>{definition.definition}</li>
        ))}
      </ul>
    </div>
  );
};

export default Meanings;
