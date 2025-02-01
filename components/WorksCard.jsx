import React, { useEffect } from 'react'

function WorksCard({ data }) {
    console.log(data);
    const keyframesCircleLevel0 = `
 @keyframes rotate {
   0% {
     transform: rotate(0deg);
   }
   100% {
     transform: rotate(360deg);
   }
 }
`;
    useEffect(() => {
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframesCircleLevel0, styleSheet.cssRules.length);
    }, []);

    const rotateCard = {
        // animation: `rotate 1s linear infinite`,
    }

    return (
        <div className='cardRotate  my-[30px]'>
            <div className='bg-gradient-to-r p-[1px] from-[#B30A94] to-[#492BFF] rounded-xl '>
                <div className='bg-black p-[10px] rounded-xl relative'>
                    <img src={data.image} alt="" className='w-[400px] rounded-lg' />
                    <p className='text-center text-wrap max-w-[400px] my-[20px]'>{data.title} <a className='underline text-[#492BFF]' href={data.url}>{data.urlTitle}</a> </p>
                    <button className='border border-[#492BFF] py-[8px] px-[30px] rounded-full bg-[#492BFF] 
               bottom-[-20px] absolute left-1/2 transform -translate-x-1/2  transition-all duration-300 hover:scale-105 hover:bg-[#492BFF]'>VIEW DETAIL</button>
                    {/* <button className='bg-gradient-to-r from-[#B30A94] to-[#492BFF] text-white py-2 px-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-indigo-700'>VIEW DETAIL</button> */}
                </div>
            </div>
        </div>

    )
}

export default WorksCard