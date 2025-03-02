import React from 'react'

function AboutMeComponent() {
    return (
        <>
            <div id="about-me" className='lg:max-w-[1000px] mx-auto p-[20px] pb-0 text-[26px] border-l-4 border-[#492BFF] relative text-white mb-[40px]'>
                My name is Doolotbek, and I am a Full Stack Developer and UI/UX designer. On the frontend, I work with React JS, Next JS, JavaScript,
                and TypeScript, while on the backend, I have experience with Node JS, Express JS, REST APIs, and databases (MySQL, MongoDB). In UI/UX design,
                I have extensive knowledge of tools such as Figma, Adobe Photoshop, and Illustrator. In project implementation, I possess a broad perspective,
                ranging from coding to designing and conceptualizing user interfaces. I am committed to teamwork and continuous learning,
                and I quickly adapt to new technologies. I strive to solve problems
                and deliver effective projects. My primary goal is to create functional, aesthetically pleasing, and user-friendly products.
                <div style={{ boxShadow: "0 0 250px 300px #472bff2c" }} className='absolute right-0 bottom-0 lg:w-[250px] lg:h-[250px] rounded-[250px] bg-[#472bff2c]'></div>
                <div style={{ boxShadow: "0 0 250px 300px #b30a941d" }} className='absolute left-0 top-0 lg:w-[250px] lg:h-[250px] rounded-[250px] bg-[#b30a941d]'></div>
            </div>
            <div className='lg:max-w-[1000px] mx-auto p-[20px] pt-0 text-[26px] border-l-4 border-[#492BFF] relative text-white'>
                I have 3 years of experience and have worked at companies such as ASOI, Sanarip, and IT-Door.
            </div>
        </>
    )
}

export default AboutMeComponent