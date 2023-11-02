import React, { useState, useContext } from 'react'
import './App.css'
import Header from './header'
import { ThemeContext } from './contexts/ThemeContexts'

function App() {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
      setTheme(theme === "light"? "dark": "light")
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <main id={theme}>
      <Header theme={theme} toggleTheme={toggleTheme}/>
    </main>
    </ThemeContext.Provider>
  )
}

export default App
