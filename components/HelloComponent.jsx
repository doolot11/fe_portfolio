import React from 'react'
import "@/components/hoverText.css"

const Hello = {
    letterSpacing: "10px",
    borderRight: "5px solid #492BFF",
}

// const hoverme = {
//     fontSize: "60px",
//     color: "transparent",
//     WebkitTextStroke: "1px #fff",
//     fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
//     position: "relative",
// }
const text = {

    background: "linear-gradient(to right, #FA12E3, blue)",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
}
const mySkillsStyle = {
    background: "#fff",
    border: "1px solid #492BFF",
    boxShadow: "0 0 10px 10px #a7a7a713",
    borderRadius: "10px",
    padding: "4px 8px",
    width: "auto",
    // position: "absolute",
}
function HelloComponent() {
    return (
        <div >
            <h1 className='hoverme' data-text="HELLO! MY NAME IS">HELLO! MY NAME IS</h1>
            <h2 className='doolot'>DOOLOT</h2>
            <div style={mySkillsStyle}>
                <h3 style={text} className='text-[#492BFF]'>I AM FRONTEND, BACKEND DEVELOPER AND UI|UX DESIGNER</h3>
            </div>
        </div>

    )
}

export default HelloComponent