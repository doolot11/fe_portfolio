import React from 'react'

const mySkillsStyle = {
    background: "#fff",
    border: "1px solid #492BFF",
    boxShadow: "0 0 10px 10px #a7a7a713",
    borderRadius: "100px",
    padding: "8px 28px",
    cursor: "pointer",
    // width: "auto",
    // dispaly: "inline-block"
    // position: "absolute",
}
const text = {
    fontSize: "35px",
    background: "linear-gradient(to right, #FA12E3, blue)",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
}

function COntactBox() {
    return (
        <div id='contact' className='flex justify-center items-center'>
            <div>
                <div style={mySkillsStyle}>
                    <div className='flex justify-center items-center gap-4'>
                        <img src="/icons/telegram.svg" alt="" />
                        <span style={text}> @doolotbbek</span>
                    </div>
                </div>
                <div style={mySkillsStyle}>
                    <div className='flex justify-center items-center gap-4'>
                        <img src="/icons/x.svg" alt="" />
                        <span style={text}> @doolotbbek</span>
                    </div>
                </div>
                <div style={mySkillsStyle}>
                    <div className='flex justify-center items-center gap-4'>
                        <img src="/icons/whatsapp.svg" alt="" />
                        <span style={text}>+996999444072</span>
                    </div>
                </div>
                <div style={mySkillsStyle}>
                    <div className='flex justify-center items-center gap-4'>
                        <img src="/icons/behance.svg" alt="" />
                        <span style={text}> @doolotbbek</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default COntactBox