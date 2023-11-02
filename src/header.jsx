import React from "react";
import { useState } from "react";
import ReactSwitch from 'react-switch'

const Header = ({theme, toggleTheme}) => {

    return (
        <div>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} checkedIcon/>
            <p>{theme==="light"?"light":"dark"}</p>
        </div>
    )
}

export default Header

