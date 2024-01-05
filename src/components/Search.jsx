import React from "react";
import "../css/App.css";
import { useFont } from "../contexts/FontContexts";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const { currFont, fonts } = useFont();
  return (
    <form id="search-container">
      <input type="search" className={currFont} id="search-bar"></input>
      <label>
        <CiSearch
          style={{
            color: "#8558b6",
            fontSize: "1.25rem",
            fontWeight: "900",
            cursor: "pointer",
          }}
        />
      </label>
    </form>
  );
};

export default Search;
