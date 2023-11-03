import React from "react";
import { useState, useContext } from "react";
import {PiBookThin} from 'react-icons/pi'
import {IoIosArrowDown} from 'react-icons/io'
import '../css/header.css'
import { FontContext } from "../contexts/FontContexts";
import FontDropdown from "./FontDropdown";
import Switch from "./Switch";

const Header = () => {
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
                    <p>{currFont}</p>
                    <IoIosArrowDown id="down-arrow" onClick={() => {
                        toggleDropdown()
                    }}/>
                    {dropdown && <ul>
                        {fonts.map((font, index) => (
                        <FontDropdown key={index} font={font}/>
                        ))}
                
                    </ul>}
                    
                </div>
                <Switch/>
            </div>
            
        </header>
    )
}

export default Header

