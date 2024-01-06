import { createContext, useContext, useState, axios } from "react";

const WordContext = createContext();
const WordUpdateContext = createContext()
const WordProvider = ({ children }) => {
  const [word, setWord] = useState("none");
  const getWord = (newWord) => {
    setWord(newWord)
  };
  return (
  <WordContext.Provider value={word}>
    <WordUpdateContext.Provider value={getWord}>
      {children}
    </WordUpdateContext.Provider>
  </WordContext.Provider>)
};

const useWord = () => {
  return useContext(WordContext);
};

const useWordUpdate = () => {
  return useContext(WordUpdateContext)
}

export default WordProvider;
export { useWord, useWordUpdate };
