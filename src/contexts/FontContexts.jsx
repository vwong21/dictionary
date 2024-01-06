import { createContext, useContext, useState } from "react";

const FontContext = createContext();
const FontUpdateContext = createContext();

const FontProvider = ({ children }) => {
  const fonts = ["Serif", "Sans-serif", "Monospace"];
  const [currFont, setFont] = useState("Serif");
  const changeFont = (font) => {
    currFont != font && setFont(font);
  };

  return (
    <FontContext.Provider value={{ currFont, fonts }}>
      <FontUpdateContext.Provider value={changeFont}>
        {children}
      </FontUpdateContext.Provider>
    </FontContext.Provider>
  );
};

const useFont = () => {
  return useContext(FontContext);
};

const useFontUpdate = () => {
  return useContext(FontUpdateContext);
};

export default FontProvider;
export { useFont, useFontUpdate };
