"use client"

import React from "react";
import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import HelloComponent from "@/components/HelloComponent";
import SkillsBox from "@/components/SkillsBox";
import Head from "next/head";

const AnimateTools = dynamic(() => import('@/components/AnimateTools'), { ssr: false });
export default function Home() {

  const wrapMainPage = {
    display: "grid",
    // gridTemplateColumns: "2fr 1fr 2fr",

  }

  return (
    <div className="">
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
      <div className="block md:hidden">
        COMING SOON MOBILE VERSION...
        <h3>You can see on Desktop</h3>
      </div>
      <div className="hidden md:block">
        <Header />
        <main >
          <div style={wrapMainPage} className="md:h-[600px] p-10 items-center grid lg:grid-cols-[2fr_1fr_2fr] md:grid-cols-[1fr]">
            <HelloComponent />
            <div style={{ boxShadow: "0 0 250px 300px #472bff2c" }} className="lg:w-[250px] lg:h-[250px] rounded-[250px] bg-[#472bff2c] shadow-[0 0 250px 300px #492BFF]">
              {/* <img src="/images/centerLight.png" alt="" /> */}
            </div>
            <div className="relative">
              <AnimateTools />
            </div>
          </div>
          <SkillsBox />
          <div className="h-[400px] flex items-center justify-center">
            <h1>COMING COON...</h1>
          </div>
        </main>
        <footer>

        </footer>
      </div>
    </div >
  );
}
