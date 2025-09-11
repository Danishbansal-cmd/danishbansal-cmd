import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="w-screen px-5 bg-[#101010] flex flex-col items-center text-white">
            <div className="border lg:container w-full border-[#464141] my-8 p-8">
                <div className="text-left">
                    <p className="leading-none uppercase text-base font-bold">have a project in mind?</p>
                    <p  className="leading-none uppercase text-[15vw] font-extrabold text-zinc-700 tracking-tighter" 
                    style={{ lineHeight: "0.9", textIndent: "-1rem" }}>let's talk</p> 
                </div>

                <div className="flex flex-col md:flex-row gap-5 items-start justify-between md:items-center mt-10">
                    <div className="flex flex-wrap gap-2 md:gap-6">
                        <NavLink to={"https://www.linkedin.com/in/danishbansal-cmd/"} target="_blank">
                            <div className="capitalize px-8 py-2 text-lg font-medium bg-transparent hover:bg-zinc-600 transition-all duration-200 border border-zinc-700 text-zinc-300">
                                Linkedin
                            </div>
                        </NavLink>
                        <NavLink to={"https://github.com/Danishbansal-cmd"} target="_blank">
                            <div className="capitalize px-8 py-2 text-lg font-medium bg-transparent hover:bg-zinc-600 transition-all duration-200 border border-zinc-700 text-zinc-300">
                                Github
                            </div>
                        </NavLink>
                        <NavLink to={"https://x.com/danishbansal01"} target="_blank">
                            <div className="capitalize px-8 py-2 text-lg font-medium bg-transparent hover:bg-zinc-600 transition-all duration-200 border border-zinc-700 text-zinc-300">
                                X
                            </div>
                        </NavLink>
                    </div>
                    <div className="text-xs text-left md:text-right text-gray-400">
                        <p>Chandigarh, Punjab</p>
                        <p>danishbansal2001@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="lg:container flex justify-between items-center w-full my-4 text-sm border border-[#464141]">
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2">
                        Made with <span className="text-red-500 text-3xl">&#x2764;</span>
                    </div> 
                    <div>
                        by <span className="font-extrabold text-lg">Danish Bansal</span>
                    </div>
                </div>
                <div className="text-xs text-gray-400">All rights reserved.</div>
            </div>
        </footer>
    );
}

export default Footer;
