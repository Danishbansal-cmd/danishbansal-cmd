import { NavLink } from "react-router-dom";


function Footer() {
    return (
        <footer className="w-screen px-5 bg-[#101010] flex flex-col items-center text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 border lg:container w-full border-[#464141] my-8 px-4 py-4">
                <div className="flex flex-col gap-6">
                    <div>
                        <div className="bg-cover bg-no-repeat w-40 h-40 border border-[#464141]" style={{backgroundImage: `url(/images/logo.png)`}}>
                        </div>
                        <p className="text-xs text-white">No stop - <span className="italic text-sm text-gray-400">Creativity</span></p>
                    </div>
                    <div className="">
                        <p style={{fontFamily: "ArchivoBlack"}} className="text-5xl">HAVE FUN</p>
                    </div>
                </div>
                <div className="col-span-2 w-full text-right">
                    <div className="flex flex-col gap-3">
                        <p className="text-2xl font-bold">Connect</p>
                        <NavLink to={"https://www.linkedin.com/in/danishbansal-cmd/"} target="_blank">Linkedin</NavLink>
                        <NavLink to={"https://github.com/Danishbansal-cmd"} target="_blank">Github</NavLink>
                        <NavLink to={"https://leetcode.com/u/danishbansal/"} target="_blank">LeetCode</NavLink>
                        <NavLink to={"https://x.com/danishbansal01"} target="_blank">X</NavLink>
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
