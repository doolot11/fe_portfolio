import React, { useState } from 'react'

const boxHeader = {
  margin: "0 auto",

}
const menubar = [
  { text: "HOME", path: "/"},
  { text: "SKILLS", path: "skills"},
  { text: "WORKS", path: "works"},
  { text: "CONTACT", path: "contact"},
  { text: "ABOUT ME", path: "about-me"},
]



function Header() {
  const [activeTab, setActiveTab] = useState("HOME")
  return (
    <header style={{zIndex: 9}} className='relative'>
      <div className='fixed top-2 left-1/2 transform -translate-x-1/2 bg-[#000000] rounded-3xl py-1 px-1 flex items-center justify-center gap-[3px]'>
        {menubar.map((i) => (
          <a   href={"#" + i.path} onClick={() => setActiveTab(i.text)}
            key={i.text} style={{}} className={`text-white transition  duration-500 ease-out text-[10px] md:text-[16px] md:py-[4px] py-[2px] px-[5px] md:px-[10px] ${i.text === activeTab && "bg-[#492BFF]"} text-nowrap rounded-3xl cursor-pointer`}>{i.text}</a>
        ))}
      </div>
    </header>
  )
}

export default Header