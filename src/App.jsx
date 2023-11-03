import React, { useState, useContext } from 'react'
import './App.css'
import Header from './header'
import { ThemeContext } from './contexts/ThemeContexts'
import { FontContext } from './contexts/FontContexts'

function App() {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
      setTheme(theme === "light"? "dark": "light")
  }

  const fonts = ['serif', 'sans-serif', 'monospace']
  const [currFont, setFont] = useState('serif')
  const changeFont = (font) => {
    currFont != font && setFont(font) 
  }

  return (
    <FontContext.Provider value={{currFont, changeFont, fonts}}>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <main className={theme}>
      <Header/>
    </main>
    </ThemeContext.Provider>
    </FontContext.Provider>
  )
}

export default App
