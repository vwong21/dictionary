import React from "react";
import '../css/app.css'

const FontDropdown = ({font}) => {
    const fontLower = font.toLowerCase()
    return(<li id="font-item" style={{fontFamily: fontLower}}>{font}</li>)
}
export default FontDropdown