"use client"

import React, { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import HelloComponent from "@/components/HelloComponent";
import SkillsBox from "@/components/SkillsBox";
import Head from "next/head";
import WorksComponent from "@/components/WorksComponent";
import ContactBox from "@/components/ContactBox";
import AboutMeComponent from "@/components/AboutMeComponent";
import AnimateToolsMobile from "@/components/AnimateToolsMobile";
// import bgMusic from "@/sounds/bgmusic.mp3"

const AnimateTools = dynamic(() => import('@/components/AnimateTools'), { ssr: false });
export default function Home() {

  const wrapMainPage = {
    // display: "grid",
    // gridTemplateColumns: "2fr 1fr 2fr",
  }
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
    <div >
      <Head>
        <title>Doolotbek</title>
        <meta name="description" content="Tolonbay uulu Doolotbek" />
        <meta name="keywords" content="developer js frontend backend ui-ux designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        {/* social */}
        <meta property="og:title" content="Tolonbay uulu Doolotbek developer" />
        <meta property="og:description" content="developer js frontend backend ui-ux designer" />
        <meta property="og:image" content="/images/favicon.jpg" />
        <meta property="og:url" content="https://www.doolotbek.ru" />
        {/* <meta name="google-site-verification" content="J_-2TkexiSRX4Q_-MrRDPCSmDcm45e4UMYurYqufQjQ" /> */}
        {/* <!-- Google tag (gtag.js) --> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-PZH1PRZN5S"></script> */}

        {/* image analyze */}
        {/* <link rel="preload" href="/_next/static/media/ellipse.8d580903.svg" as="image" type="image/svg+xml"/> */}
      </Head>
      {/* <div className="block md:hidden">
        COMING SOON MOBILE VERSION...
        <h3>You can see on Desktop</h3>
      </div> */}
      <div
      // className="hidden md:block"
      >
        <Header />
        <main style={{ zIndex: 8 }} >
          <div onClick={playMusic} className={`z-[99] w-[60px] h-[60px] fixed right-2 top-2 p-1 border cursor-pointer ${!isPlaying ? "border-[#B30A94]" : "border-[#0ead49]"} rounded-full`}>
            <div>
              <img src={!isPlaying ? "/icons/soundOff.svg" : "/icons/soundOn.svg"} />
              {/* <button onClick={playMusic}>
              play
              </button> */}
            </div>
          </div>

          <div id="/" style={wrapMainPage} className="h-[800px] md:h-[1200px] lg:h-[600px] p-10 mb-[150px] lg:mb-0 items-center grid lg:grid-cols-[2fr_1fr_2fr] sm:grid-cols-[1fr] md:grid-cols-[1fr]">
            <HelloComponent />
            <div style={{ boxShadow: "0 0 250px 300px #472bff2c" }} className="lg:w-[250px] lg:h-[250px] rounded-[250px] bg-[#472bff2c] shadow-[0 0 250px 300px #492BFF]">
              {/* <img src="/images/centerLight.png" alt="" /> */}
            </div>
            <div className="relative block md:hidden">
              <AnimateToolsMobile />
            </div>
            <div className="relative hidden md:block">
              <AnimateTools />
            </div>
          </div>

          <span className="text-[30px] text-center flex justify-center pb-[40px] 
          font-black bg-gradient-to-r from-[#B30A94] to-[#492BFF] text-transparent bg-clip-text" id="skills">MY SKILLS</span>
          <SkillsBox />

          <span className="text-[30px] text-center  flex justify-center m-[40px] 
          font-black bg-gradient-to-r from-[#B30A94] to-[#492BFF] text-transparent bg-clip-text" id="works">WORKS (PROJECTS)</span>
          <div className=" flex items-center justify-center">
            <WorksComponent />
          </div>

          <span className="text-[30px] text-center  flex justify-center m-[40px] 
          font-black bg-gradient-to-r from-[#B30A94] to-[#492BFF] text-transparent bg-clip-text" id="works">CONTACT</span>
          <ContactBox />

          <span className="text-[30px] text-center  flex justify-center m-[40px] 
          font-black bg-gradient-to-r from-[#B30A94] to-[#492BFF] text-transparent bg-clip-text" id="works">ABOUT ME</span>
          <AboutMeComponent />
          <h1>COMING SOON...</h1>
        </main>
        <footer>

        </footer>
      </div>
    </div >
  );
}
