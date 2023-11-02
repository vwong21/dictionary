import React from "react";
import { useState } from "react";
import ReactSwitch from 'react-switch'
import {PiMoonLight} from 'react-icons/pi'
import {PiBookThin} from 'react-icons/pi'
import './header.css'

const Header = ({theme, toggleTheme}) => {

    return (
        <header>
            <div id="left-header">
                <PiBookThin id="book"/>
            </div>
            
            <div id="right-header">
                <div id="switch-container">
                    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} checkedIcon onColor="#A147E9" uncheckedIcon={false}/>
                    <PiMoonLight id="moon"/> 
                </div>
            </div>
            
            
        </header>
    )
}

export default Header

