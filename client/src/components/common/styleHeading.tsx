

const StyleHeading : React.FC<{className?: String, children?: React.ReactNode}> = ({className = "", children}) => {
    return (
        <div 
            className={`text-center tracking-[-2px] sm:tracking-[-3px] ${className}`} >
                {children}
            </div>
    );
}

export default StyleHeading;
