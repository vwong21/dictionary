import React, { useContext, useState } from "react";
import "./css/App.css";
import Header from "./components/header";
import { FontContext } from "./contexts/FontContexts";
import { useTheme } from "./contexts/ThemeContexts";

function App() {
  const theme = useTheme();
  const fonts = ["Serif", "Sans-serif", "Monospace"];
  const [currFont, setFont] = useState("Serif");
  const changeFont = (font) => {
    currFont != font && setFont(font);
  };

  return (
    <FontContext.Provider value={{ currFont, changeFont, fonts }}>
      <main className={theme}>
        <Header />
      </main>
    </FontContext.Provider>
  );
}

export default App;
