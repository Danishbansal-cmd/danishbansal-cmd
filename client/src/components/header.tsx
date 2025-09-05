import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => {
        setOpenNav(!openNav);
    }

    const NavBar: React.FC<{ className?: String }> = ({ className = "" }) => {
        return (
            <>
                <NavLink to={"#"} className={`${className}`}>Home</NavLink>
                <NavLink to={"#"} className={`${className}`}>About</NavLink>
                <NavLink to={"#"} className={`${className}`}>Projects</NavLink>
                <NavLink onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("experience")?.scrollIntoView({behavior: "smooth"});
                }} to={"#experience"} className={`${className}`}>Experience</NavLink>
                <NavLink to={"https://docs.google.com/document/d/1wc0s1uKjlFkL4_J9jP38_Pr_1xs00Vls/edit?usp=sharing&ouid=106471281902682972298&rtpof=true&sd=true"} target="_blank" className={`${className} [word-spacing:-8px]`}>Resume &#x27b6;</NavLink>
            </>
        );
    }

    return (
        <header className="relative z-20">
            <div className="h-header-height w-screen bg-[#101010] flex items-center justify-center px-5">
                <div className="lg:container flex justify-between py-2 border border-[#464141] w-full">
                    <div className="text-2xl font-bold text-white">Danish.</div>
                    <div className="flex flex-col justify-center">
                        <div className="flex">
                            <nav className="hidden md:flex gap-6 text-sm items-center">
                                {<NavBar className={`text-white cursor-pointer hover:scale-125 hover:line-through decoration-[#464141] decoration-2`}/>}
                            </nav>
                            <button className="group sm:block hidden px-5 py-1 tracking-tight text-white bg-blue-shade-new hover:text-white cursor-pointer duration-200 transition-all active:scale-80 mx-4">
                                Contact <span className="me gap-2  inline-block transform transition-all group-hover:rotate-[360deg]">Me</span>
                            </button>
                            <div className={`${openNav ? 'top-header-height' : '-top-[1000px]'} absolute -z-10 left-0 bg-[#101010] w-screen h-screen md:hidden flex items-start px-5 transition-all duration-600 ease-in-out`}>
                                <div className="relative w-full h-full">
                                    <div className={`flex flex-col py-7 text-4xl w-full`}>
                                        {<NavBar className={"text-white cursor-pointer hover:line-through decoration-[#464141] decoration-2 hover:text-7xl transition-all duration-100 focus:cursor-grabbing"} />}
                                    </div>
                                    <button onClick={toggleNav} className="group absolute bottom-22 right-0 px-4 py-0 bg-white cursor-pointer focus:scale-80">
                                        <div className="rotate-90 text-black text-5xl group-hover:rotate-270 transition-all">&#x2799;</div>
                                    </button>
                                </div>
                            </div>
                            <div className="mx-4 md:hidden items-center justify-center flex">
                                <button onClick={toggleNav} className="flex md:hidden flex-col justify-center items-center gap-1 cursor-pointer">
                                    <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 ${openNav ? 'rotate-45 translate-y-2' : '-translate-y-0.5'}`}></span>
                                    <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 ${openNav ? 'opacity-0' : 'opacity-100'}`}></span>
                                    <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 ${openNav ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;