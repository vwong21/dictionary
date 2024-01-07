import React, { useContext, useState } from "react";
import "./css/App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { useTheme } from "./contexts/ThemeContexts";
import { useFont } from "./contexts/FontContexts";
import WordResult from "./components/WordResult";

function App() {
  const theme = useTheme();
  const { currFont, fonts } = useFont();
  return (
    <main className={`${theme} ${currFont}`}>
      <Header />
      <Search />
      <WordResult />
    </main>
  );
}

export default App;
