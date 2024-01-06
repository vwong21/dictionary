import React, { useState } from "react";
import "../css/App.css";
import axios from "axios";
import { useFont } from "../contexts/FontContexts";
import { CiSearch } from "react-icons/ci";
import { useWordUpdate } from "../contexts/WordContexts";
import { useWord } from "../contexts/WordContexts";

const Search = () => {
  const word = useWord();
  const { currFont, fonts } = useFont();
  const updateWord = useWordUpdate();
  const [searchQuery, setSearchQuery] = useState("");
  const searchApi = async () => {
    try {
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`)
      updateWord(res.data)
    } catch(error) {  
      console.error(error)
    }
  }
  const handleIconClick = () => {
    searchApi()
  }

  return (
    <div id="search-container">
      <input type="search" className={currFont} id="search-bar" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}></input>
      <label>
        <CiSearch
          style={{
            color: "#8558b6",
            fontSize: "1.25rem",
            fontWeight: "900",
            cursor: "pointer",
          }}
          onClick={handleIconClick}
        />
      </label>
    </div>
  );
};

export default Search;
