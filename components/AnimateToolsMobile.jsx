"use client"

import React, { useEffect } from 'react'
import HoverableImage from './ToShowSkillsHovering';
function AnimateToolsMobile() {

    const keyframesCircleLevel0 = `
 @keyframes circleLevel0Mobile {
   0% {
     transform: rotate(0deg) translate(50px) rotate(0deg);
   }
   100% {
     transform: rotate(360deg) translate(50px) rotate(-360deg);
   }
 }
`;
    const keyframesCircleLevel1 = `
 @keyframes circleLevel1Mobile {
   100% {
     transform: rotate(0deg) translate(100px) rotate(0deg);
   }
   0% {
     transform: rotate(360deg) translate(100px) rotate(-360deg);
   }
 }
`;
    const keyframesCircleLevel2 = `
 @keyframes circleLevel2Mobile {
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
        styleSheet.insertRule(keyframesCircleLevel0, styleSheet.cssRules.length);
    }, []);
    useEffect(() => {
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframesCircleLevel1, styleSheet.cssRules.length);
    }, []);
    useEffect(() => {
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframesCircleLevel2, styleSheet.cssRules.length);
    }, []);

    // Circle style
    const createCircleImageStyleLevel0 = (delay) => ({
        width: "30px",
        height: "30px",
        border: "1px solid #492BFF",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
        borderRadius: "50%",
        animation: `circleLevel0Mobile 20s linear infinite`,
        animationDelay: `${delay}s`, // Add delay for sequential rotation
        boxShadow: "0 0 10px 10px #472bff13"
    });
    const createCircleImageStyleLevel1 = (delay) => ({
        width: "30px",
        height: "30px",
        border: "1px solid #492BFF",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
        borderRadius: "50%",
        animation: `circleLevel1Mobile 20s linear infinite`,
        animationDelay: `${delay}s`, // Add delay for sequential rotation
        boxShadow: "0 0 10px 10px #472bff13"
    });
    const createCircleImageStyleLevel2 = (delay) => ({
        width: "30px",
        height: "30px",
        border: "1px solid #492BFF",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
        borderRadius: "50%",
        animation: `circleLevel2Mobile 20s linear 5s infinite`,
        animationDelay: `${delay}s`, // Add delay for sequential rotation
        boxShadow: "0 0 10px 10px #472bff13",
    });

    const level0Circle = {
        width: "100px",
        height: "100px",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
        borderRadius: "50%",
        border: "1px solid #492BFF",
        transform: "rotate(0deg)"
    }

    const level1circle = {
        width: "200px",
        height: "200px",
        border: "1px solid #492BFF",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
        borderRadius: "50%",
        transform: "rotate(0deg)"
    }
    const level2circle = {
        width: "300px",
        height: "300px",
        border: "1px solid #492BFF",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
        borderRadius: "50%",
        transform: "rotate(0deg)"
    }

    // Render multiple circles
    const renderCirclesLevel0 = () => {
        const data = [
            { delay: 0, image: "/images/reactjs.png", text: "React JS" },
            { delay: 6.6, image: "/images/photoshop.png", text: "Photoshop" },
            { delay: 13.3, image: "/images/figma.png", text: "Figma" },
        ]
        return data.map((i, index) => (
            <div key={index} style={createCircleImageStyleLevel0(i.delay)}>
                <HoverableImage
                    key={index}
                    delay={i.delay}
                    image={i.image}
                    text={i.text}
                />
            </div>
        ));
    };
    const renderCirclesLevel1 = () => {
        const data = [
            { delay: 0, image: "/images/github.png", text: "Github" },
            { delay: 3.3, image: "/images/nodejs.png", text: "Node JS" },
            { delay: 6.6, image: "/images/nextjs.png", text: "Next JS" },
            { delay: 10, image: "/images/ts.png", text: "TypeScript" },
            { delay: 13.3, image: "/images/mongodb.png", text: "Mongo DB" },
            { delay: 16.9, image: "/images/redux.png", text: "Redux" },
        ]
        return data.map((i, index) => (
            <div key={index} style={createCircleImageStyleLevel1(i.delay)}>
                <HoverableImage
                    key={index}
                    delay={i.delay}
                    image={i.image}
                    text={i.text}
                />
            </div>
        ));
    };
    const renderCirclesLevel2 = () => {
        const data = [
            { delay: 0, image: "/images/html.png", text: "Html" },
            { delay: 1.6, image: "/images/js.png", text: "Java Script" },
            { delay: 3.3, image: "/images/jquery.png", text: "JQuery" },
            { delay: 4.9, image: "/images/bootstrap.png", text: "Bootstrap" },
            { delay: 6.5, image: "/images/swagger.png", text: "Swagger" },
            { delay: 8.1, image: "/images/mui.png", text: "MUI" },
            { delay: 9.7, image: "/images/clickup.png", text: "Click Up" },
            { delay: 11.3, image: "/images/trello.png", text: "Trello" },
            { delay: 12.9, image: "/images/axios.png", text: "Axios" },
            { delay: 14.5, image: "/images/nginx.png", text: "Nginx" },
            { delay: 16.1, image: "/images/postgresql.png", text: "Postgrespl" },
            { delay: 17.7, image: "/images/vscode.png", text: "Vs code" },
        ]
        return data.map((i, index) => (
            <div key={index} style={createCircleImageStyleLevel2(i.delay)}>
                <HoverableImage
                    key={index}
                    delay={i.delay}
                    image={i.image}
                    text={i.text}
                />
            </div>
        ));
    };



    return (
        <div style={level2circle}>{renderCirclesLevel2()}
            <div style={level1circle} > {renderCirclesLevel1()}
                <div style={level0Circle} >{renderCirclesLevel0()}
                    <div style={mySkillsStyle}>
                        <div style={textMySkillsStyle} className='text-[12px]'> <b>MY SKILLS</b></div>

                    </div>
                </div >
            </div>
        </div>
    );
}

export default AnimateToolsMobile

const textMySkillsStyle = {
    background: "linear-gradient(to right, #FA12E3, blue)",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
   
    

}
const mySkillsStyle = {
    background: "#fff",
    border: "1px solid #492BFF",
    boxShadow: "0 0 10px 10px #472bff13",
    borderRadius: "10px",
    padding: "6px",
    width: "auto",
    position: "absolute",
    left: -45
}