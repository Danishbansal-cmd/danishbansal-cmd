


function Loader({className} : {className? : String}){
    return (
        <div className={`${className} fixed top-0 left-0 right-0 bg-black w-screen h-screen flex-col items-center justify-center gap-5 z-50 overflow-hidden`}>
            <div className="w-[250px] sm:w-[400px] h-[300px] bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(/gif/cat_running.gif)`}}></div>
            <span className="text-white font-light italic text-sm">We are Loading For You...</span>
        </div>
    );
}

export default Loader;
