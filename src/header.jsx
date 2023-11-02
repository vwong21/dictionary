import React from "react";
import { useState } from "react";
import ReactSwitch from 'react-switch'
import {BiMoon} from 'react-icons/bi'

const Header = ({theme, toggleTheme}) => {

    return (
        <section id="header">
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} checkedIcon/>
            <BiMoon/>
        </section>
    )
}

export default Header

