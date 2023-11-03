import React from "react";
import { useState, useContext } from "react";
import ReactSwitch from 'react-switch'
import {PiMoonLight} from 'react-icons/pi'
import {PiBookThin} from 'react-icons/pi'
import { motion } from "framer-motion";
import { ThemeContext } from "./contexts/ThemeContexts";
import './header.css'

const Header = () => {
    const { theme, toggleTheme}  = useContext(ThemeContext)

    return (
        <header>
            <div id="left-header">
                <PiBookThin id="book"/>
            </div>
            
            <div id="right-header">
                <div id="font-container">
                    
                </div>
                <div id="switch-container">
                    <div id="switch-background" className={theme} onClick={() => {toggleTheme()}}>
                        <motion.div id="switch"
                        animate={{x: theme === "light" ? 0 : 15}}
                        />
                    </div>
                    <PiMoonLight id="moon"/> 
                </div>
            </div>
            
        </header>
    )
}

export default Header

