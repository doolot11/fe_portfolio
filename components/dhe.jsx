"use client"

import React, { useEffect, useState } from 'react'
function AnimateTools() {
 // Define keyframes in JavaScript
 const keyframesCircle = `
 @keyframes circle {
   0% {
     transform: rotate(0deg) translate(150px) rotate(0deg);
   }
   100% {
     transform: rotate(360deg) translate(150px) rotate(-360deg);
   }
 }
`;

// Inject the keyframes into the document head
useEffect(() => {
 const styleSheet = document.styleSheets[0];
 styleSheet.insertRule(keyframesCircle, styleSheet.cssRules.length);
}, []);

// Circle style
const createCircleStyle = (delay) => ({
 width: "30px",
 height: "30px",
 border: "2px solid rgb(178, 255, 168)",
 position: "absolute",
 top: "50%",
 left: "50%",
 transformOrigin: "center",
 borderRadius: "50%",
 animation: `circle 30s linear infinite`,
 animationDelay: `${delay}s`, // Add delay for sequential rotation
});

const lol = {
    width: "330px",
    height: "330px",
    border: "1px solid rgb(178, 255, 168)",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    borderRadius: "50%"
}

// Render multiple circles
const renderCircles = () => {
 const delays = [0, 1, 2]; // Delays in seconds for each circle
 return delays.map((delay, index) => (
   <div key={index} style={createCircleStyle(delay)}></div>
 ));
};

return <div style={lol}>{renderCircles()}</div>;
}

export default AnimateTools

// width: "30px",
// height: "30px",
// border: "1px solid rgb(178, 255, 168)",
// position: "absolute",
// top: 0,
// bottom: 0,
// right: 0,
// left: 0,
// margin: "auto",
// borderRadius: "50%",
// // "WebkitAnimation": "circle 5s linear infinity",
// animation: `circle 25s linear 5s infinite`,
