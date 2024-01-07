import React, { useState } from "react";
import "../css/App.css";
import axios from "axios";
import { useFont } from "../contexts/FontContexts";
import { CiSearch } from "react-icons/ci";
import { useWordUpdate } from "../contexts/WordContexts";
import { useTheme } from "../contexts/ThemeContexts";

const Search = () => {
  const theme = useTheme();
  const { currFont, fonts } = useFont();
  const updateWord = useWordUpdate();
  const [searchQuery, setSearchQuery] = useState("");
  const searchApi = async () => {
    try {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
      );
      updateWord(res.data);
    } catch (error) {
      updateWord("404");
    }
  };
  const handleIconClick = () => {
    if (searchQuery != "") {
      searchApi();
      setSearchQuery("");
    }
  };

  return (
    <div id="search-container" className={`${theme} sizes`}>
      <input
        type="search"
        className={currFont}
        id="search-bar"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        autoComplete="off"
      ></input>
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
