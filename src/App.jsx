import React, { useContext, useState } from "react";
import "./css/App.css";
import Header from "./components/header";
import { useTheme } from "./contexts/ThemeContexts";
import { useFont } from "./contexts/FontContexts";

function App() {
  const theme = useTheme();
  const { currFont, fonts } = useFont();
  console.log(currFont);

  return (
    <main className={`${theme} ${currFont}`}>
      <Header />
    </main>
  );
}

export default App;
