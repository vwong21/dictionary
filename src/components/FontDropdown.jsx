import React from "react";
import '../css/app.css'

const FontDropdown = ({
    font, 
    toggleDropdown, 
    changeFont
}) => {
    const fontLower = font.toLowerCase()
    return(<li id="font-item" style={{fontFamily: fontLower}} onClick={()=>{
        toggleDropdown()
        changeFont(font)
    }}>{font}</li>)
}
export default FontDropdown