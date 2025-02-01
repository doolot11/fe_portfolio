const { useState } = require("react");

function HoverableImage({ delay, image, text, }) {
    const [hovered, setHovered] = useState(false);

    // const containerStyle = {
    //     position: "relative",
    //     width: "100px", // Adjust size as needed
    //     height: "100px",
    //     margin: "10px",
    // };

    const imageStyle = {
        width: "100%",
        transition: "transform 0.3s ease",
        transform: hovered ? "scale(1.1)" : "scale(1)", // Zoom effect on hover
    };

    const textStyle = {
        position: "absolute",
        top: "-30%",
        left: "50%",
        textWrap: "nowrap",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        fontSize: "12px",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
        pointerEvents: "none", // Prevent text from blocking hover
    };

    return (
        <div
            // style={containerStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={image} alt="" style={imageStyle} />
            <div style={textStyle}>{text}</div>
        </div>
    );
}

export default HoverableImage