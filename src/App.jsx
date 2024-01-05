import React, { useContext, useState } from "react";
import "./css/App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { useTheme } from "./contexts/ThemeContexts";
import { useFont } from "./contexts/FontContexts";
import { useWord } from "./contexts/WordContexts";

function App() {
  const theme = useTheme();
  const { currFont, fonts } = useFont();
  const word = useWord();
  return (
    <main className={`${theme} ${currFont}`}>
      <Header />
      <Search />
      <p>{word}</p>
    </main>
  );
}

export default App;
