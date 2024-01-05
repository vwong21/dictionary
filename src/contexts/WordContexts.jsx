import { createContext, useContext, useState, axios } from "react";

const WordContext = createContext();

const WordProvider = ({ children }) => {
  const [word, setWord] = useState("none");
  const getWord = (searchWord) => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((res) => {
        const newWord = res.data;
        setWord(newWord);
      });
  };
  return <WordContext.Provider value={word}>{children}</WordContext.Provider>;
};

const useWord = () => {
  return useContext(WordContext);
};

export default WordProvider;
export { useWord };
