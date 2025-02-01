import React from 'react'
import "@/components/hoverText.css"

function SkillsBox() {
    // const hexagonStyle = {
    //     position: "relative",
    //     width: "120px",
    //     height: "120px", // Adjust height to create a hexagonal shape
    //     backgroundColor: "#3498db", // Hexagon's main color
    //     // margin: "34.64px 0", // Space for the top and bottom triangles
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Hexagon shape
    //   };
    const hexagonStyle = {
        // filter: "blur(1px)",
        zIndex: 3,
        position: "relative",
        width: "100px",
        height: "100px", // Adjust for a perfect hexagon (1:√3 ratio)
        background: "#ffd012",
        margin: "-5px 7px",
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#000000",
        fontSize: "14px",
        fontWeight: "bold",
    };

    //   const gridStyle = {
    //     display: "flex",
    //     flexWrap: "wrap",
    //     justifyContent: "center",
    //     width: "auto",
    //   };

    const rowStyle = {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        zIndex: 5
    };

    const offsetRowStyle = {
        ...rowStyle,
        transform: "translateX(55px)", // Offset by half the hexagon width
    };
    return (
        <div style={{zIndex:7}} className='flex justify-center items-center'>
            <div style={{ textAlign: "center", padding: "", width: "90%", filter: "blur(0.5px)",  }} className='bg-gradient-to-r p-[2px] from-[#B30A94] to-[#492BFF] rounded-xl  wrapBees'>
                <div className='w-full py-[20px] rounded-xl bg-black'>
                    <div style={rowStyle}>
                        <div style={{ ...hexagonStyle, }}>JavaScript</div>
                        <div style={{ ...hexagonStyle, }}>TypeScript</div>
                        <div style={{ ...hexagonStyle, }}>HTML</div>
                        <div style={{ ...hexagonStyle, }}>CSS</div>
                        <div style={{ ...hexagonStyle, }}>React JS</div>
                        <div style={{ ...hexagonStyle, }}>Redux</div>
                        <div style={{ ...hexagonStyle, }}>Toolkit</div>
                    </div>
                    <div style={offsetRowStyle}>
                        <div style={{ ...hexagonStyle, }}> React-Router</div>
                        <div style={{ ...hexagonStyle, }}>Git</div>
                        <div style={{ ...hexagonStyle, }}>Github</div>
                        <div style={{ ...hexagonStyle, }}> REST  API (axios, fetch)</div>
                        <div style={{ ...hexagonStyle, }}>styled-components</div>
                        <div style={{ ...hexagonStyle, }}> CSS
                            modules</div>
                        <div style={{ ...hexagonStyle, }}>Tailwind</div>
                        <div style={{ ...hexagonStyle, }}>flex-box</div>
                        <div style={{ ...hexagonStyle, background: "#000" }}></div>
                    </div>
                    <div style={rowStyle}>
                        <div style={{ ...hexagonStyle, }}>jQuery</div>
                        <div style={{ ...hexagonStyle, }}>Bootstrap</div>
                        <div style={{ ...hexagonStyle, }}>swagger</div>
                        <div style={{ ...hexagonStyle, }}> Material UI (MUI),</div>
                        <div style={{ ...hexagonStyle, }}>figma</div>
                        <div style={{ ...hexagonStyle, }}> ui-ux</div>
                        <div style={{ ...hexagonStyle, }}>Next JS</div>
                    </div>
                    <div style={rowStyle}>
                        <div style={{ ...hexagonStyle, }}>Node JS</div>
                        <div style={{ ...hexagonStyle, }}>Express JS</div>
                        <div style={{ ...hexagonStyle, }}>Mongoose</div>
                        <div style={{ ...hexagonStyle, }}>Nginx</div>
                        <div style={{ ...hexagonStyle, }}>Postgrespl</div>
                        <div style={{ ...hexagonStyle, }}>MongoDB</div>
                        <div style={{ ...hexagonStyle, }}>Photosho</div>
                        <div style={{ ...hexagonStyle, }}>And more...</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsBox