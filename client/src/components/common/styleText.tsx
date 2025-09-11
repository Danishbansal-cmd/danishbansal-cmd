


const StyleText : React.FC<{className?: String, text: String}> = ({className = "", text}) => {
    return (
        <p className={`capitalize text-2xl ${className}`} style={{fontFamily: "Sirivennela"}}>{text}</p>
    );
}

export default StyleText;
