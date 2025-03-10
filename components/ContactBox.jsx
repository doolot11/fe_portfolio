import React from 'react'

const mySkillsStyle = {
    background: "#fff",
    border: "1px solid #492BFF",
    boxShadow: "0 0 10px 10px #a7a7a713",
    borderRadius: "100px",
    padding: "8px 28px",
    cursor: "pointer",
    margin: "5px 0"
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

function navigateSocial(e) {
    window.open(e, "_blank")
}

function COntactBox() {
    return (
        <div id='contact' className='flex justify-center items-center'>
            <div>
                <div className='moveToR' onClick={() => navigateSocial("https://t.me/doolotbbek")} style={mySkillsStyle}>
                    <div className='flex justify-center items-center gap-4'>
                        <img src="/icons/telegram.svg" alt="" />
                        <span style={text}> @doolotbbek</span>
                    </div>
                </div>
                <div className='moveToR' onClick={() => navigateSocial("https://x.com/doolotbbek")} style={mySkillsStyle}>
                    <div className='flex justify-center items-center gap-4'>
                        <img src="/icons/x.svg" alt="" />
                        <span style={text}> @doolotbbek</span>
                    </div>
                </div>
                <div className='moveToR' onClick={() => navigateSocial("https://wa.me/996999444072")} style={mySkillsStyle}>
                    <div className='flex justify-center items-center gap-4'>
                        <img src="/icons/whatsapp.svg" alt="" />
                        <span style={text}>+996999444072</span>
                    </div>
                </div>
                <div className='moveToR' onClick={() => navigateSocial("https://www.behance.net/doolotbbek")} style={mySkillsStyle}>
                    <div className='flex justify-center items-center gap-4'>
                        <img src="/icons/behance.svg" alt="" />
                        <span style={text}> @doolotbbek</span>
                    </div>
                </div>
                <div className='moveToR' onClick={() => navigateSocial("https://instagram.com/doolotbbek")} style={mySkillsStyle}>
                    <div className='flex justify-center items-center gap-4'>
                        <img src="/icons/instagram.svg" alt="" />
                        <span style={text}> @doolotbbek</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default COntactBox