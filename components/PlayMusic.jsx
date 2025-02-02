import React, { useEffect, useRef, useState } from 'react'

function PlayMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isClient, setIsClient] = useState(false); // Client-side check
    const audioRef = useRef(new Audio("/sounds/bgmusic.mp3"));

    useEffect(() => {
        setIsClient(true); // Enable audio once the component mounts
    }, []);


    function playMusic() {
        if (isClient) {
            if (isPlaying) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0; // Reset audio to start
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    return (
        <div onClick={playMusic} className={`z-[99] w-[60px] h-[60px] fixed right-2 top-2 p-1 border cursor-pointer ${!isPlaying ? "border-[#B30A94]" : "border-[#0ead49]"} rounded-full`}>
            <div>
                <img src={!isPlaying ? "/icons/soundOff.svg" : "/icons/soundOn.svg"} />
                {/* <button onClick={playMusic}>
              play
              </button> */}
            </div>
        </div>
    )
}

export default PlayMusic