import React, { useState } from 'react'

const boxHeader = {
  margin: "0 auto",

}
const menubar = [
  { text: "HOME", },
  { text: "SKILLS", },
  { text: "WORKS", },
  { text: "CONTACT", },
  { text: "ABOUT ME", },
]

function Header() {
  const [activeTab, setActiveTab] = useState("HOME")
  return (
    <header style={{zIndex: 9}} className=''>
      <div className='fixed top-2 left-1/2 transform -translate-x-1/2 bg-[#000000] rounded-3xl py-1 px-1 flex items-center justify-center gap-[3px]'>
        {menubar.map((i) => (
          <span onClick={() => setActiveTab(i.text)}
            key={i.text} style={{}} className={`transition  duration-500 ease-out text-[14px] py-[4px] px-[10px] ${i.text === activeTab && "bg-[#492BFF]"} rounded-3xl cursor-pointer`}>{i.text}</span>
        ))}
      </div>
    </header>
  )
}

export default Header