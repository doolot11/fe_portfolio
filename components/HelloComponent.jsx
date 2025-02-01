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

function HelloComponent() {
    return (
        <div >
            <h1 className='hoverme' data-text="HELLO! MY NAME IS">HELLO! MY NAME IS</h1>
            <h2 className='doolot'>DOOLOT</h2>
            <h3 className='text-[#492BFF]'>I AM FRONTEND, BACKEND DEVELOPER AND UI|UX DESIGNER</h3>
        </div>

    )
}

export default HelloComponent