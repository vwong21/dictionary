import React from "react";
import { useState, useContext } from "react";
import {PiBookThin} from 'react-icons/pi'
import {IoIosArrowDown} from 'react-icons/io'
import '../css/app.css'
import { FontContext } from "../contexts/FontContexts";
import { ThemeContext } from "../contexts/ThemeContexts";
import FontDropdown from "./FontDropdown";
import Switch from "./Switch";

const Header = () => {
    const { theme }  = useContext(ThemeContext)
    const { currFont, changeFont, fonts } = useContext(FontContext)
    const [dropdown, setDropdown] = useState(false)
    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }
    return (
        <header>
            <div id="left-header">
                <PiBookThin id="book"/>
            </div>
            
            <div id="right-header">
                <div id="font-container">
                    <div id="dropdown-container">
                        <p id="header-p">{currFont}</p>
                        {dropdown && (
                        <ul id="dropdown-menu" className={theme}>
                            {fonts.map((font, index) => {
                            if (font !== currFont) {
                                return <FontDropdown key={index} font={font} toggleDropdown={toggleDropdown} changeFont={changeFont}/>;
                            }
                        })}
                        </ul>
                        )}
                    </div>
                    <IoIosArrowDown id="down-arrow" onClick={() => {
                        toggleDropdown()
                    }}/>
                </div>
                <Switch/>
            </div>
        </header>
    )
}

export default Header

