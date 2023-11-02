import React, { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    <div id={theme}>
      <Header theme={theme} toggleTheme={toggleTheme}/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
