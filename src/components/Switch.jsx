import React, {useContext} from "react";
import {PiMoonLight} from 'react-icons/pi'
import { motion } from "framer-motion";
import { ThemeContext } from "../contexts/ThemeContexts";
import '../css/header.css'

const Switch = () => {
    const { theme, toggleTheme}  = useContext(ThemeContext)

    return (
        <div id="switch-container">
            <div id="switch-background" className={theme} onClick={() => {toggleTheme()}}>
                <motion.div id="switch"
                animate={{x: theme === "light" ? 0 : 'calc(100% * 1)'}}
                />
            </div>
            <PiMoonLight id="moon"/> 
        </div>
    )
}

export default Switch