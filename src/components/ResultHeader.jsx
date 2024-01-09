import React from "react";
import { FaPlay } from "react-icons/fa";
import useSound from "use-sound";

const ResultHeader = ({word, theme}) => {
    const isFound = word === "404";
    const findAudioSource = (phonetics) => {
        for (const phonetic of phonetics) {
          if (phonetic.audio && phonetic.audio !== "") {
            return phonetic.audio;
          }
        }
        return null;
      };
    const audioSource = findAudioSource(word[0].phonetics);
    const [play] = useSound(audioSource)
    const findPhoneticText = (phonetics) => {
        for (const phonetic of phonetics) {
          if (phonetic.text && phonetic.text !== "") {
            return phonetic.text;
          }
        }
        return null; // Return null if no valid phonetic text is found
      };
    const phoneticText = findPhoneticText(word[0].phonetics);
    return(
        <>
        {isFound ? (
        <p>Not Found</p>
      ) : (
        <>
          <div id="word-header-container">
            <h1>{word[0].word}</h1>
            {word != "none" && (
              <div id="audio-container">
                <div id="audio" className={theme} onClick={play}>
                  <FaPlay style={{ color: "#A049DC", fontSize: "1.25rem" }} />
                </div>
              </div>
            )}
            <p id="phonetic">{phoneticText}</p>
          </div>
        </>
      )}
        </>
    )
}

export default ResultHeader