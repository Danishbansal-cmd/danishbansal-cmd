import React from "react";

function GradientPostion() {
    const [mousePosition, setMousePosition] = React.useState({x : 0, y : 0});

    React.useEffect(() => {
        const updateMousePosition = (ev:any) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        }
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        }
    }, []);

    return (mousePosition);
}

interface gradientDivProps {
    children?: React.ReactNode,
    className?: string
}

export const GradientDiv: React.FC<gradientDivProps> = ({children, className = ""}) => {
    const { x, y } = GradientPostion();
    const circleRadius = 220;

    console.log(`Mouse Position: x=${x}, y=${y}`); 

    const style: React.CSSProperties = {
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(0, 0, 0, 0) 0px,
            rgba(255, 7, 7, 0.5) ${20}px,
            rgba(0,0,0,0.95) ${circleRadius}px
        )`,
        transition: "background 0.5s",
        zIndex: 10,
    };

    return (
        <div className={className} style={style}>
            {children}    
        </div>
    );
}