import { NavLink } from "react-router-dom";
import StyleHeading from "./common/styleHeading";
import StyleText from "./common/styleText";
import Tags from "./common/tags";



function Projects() {
    return (
        <div id="projects" className="w-screen flex items-center bg-black justify-center px-5 text-white 
        bg-radial-[at_10%_45%] from-[#464545]  to-black to-60%"  >
            <div className="lg:container w-full my-20 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center pb-12">
                    <StyleText className={"capitalize text-3xl"} text={"Projects"} />
                    <StyleHeading className={'text-3xl sm:text-4xl sm:tracking-[-2px]'}>
                        <>Every project is an opportunity  <br /> to learn.</>
                    </StyleHeading>
                </div>
                <div className="flex flex-col w-full bg-background-shade">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <ProjectBox
                            projectImage={"/images/danishbansal-cmd.png"}
                            projectTitle={"Danish Portfolio"}
                            projectDateRange={"May 2025 - September 2025"}
                            githubLink={"https://github.com/Danishbansal-cmd/danishbansal-cmd"}
                            siteLink={"https://danishbansal-cmd.onrender.com/"}
                            description={"A portfolio project showcasing clean design, React, and Flutter-powered interactive experiences."}
                            tagsList={["react", "typescript", "Framer Motion", "Tailwind CSS", "GSAP"]} 
                            />
                        <ProjectBox
                            projectImage={"/images/websteers.png"}
                            projectTitle={"Websteers"}
                            projectDateRange={"September 2024 - October 2024"}
                            githubLink={"https://github.com/Danishbansal-cmd/websteers"}
                            siteLink={"https://websteers.onrender.com/"}
                            description={"Websteers — a digital solutions hub delivering design, development, SEO, and marketing under one roof."}
                            tagsList={["PHP", "CSS", "Javascript"]} 
                            />
                    </div>
                    <div>
                        <ProjectBox
                            projectImage={"/images/SalesPulse.png"}
                            projectTitle={"Sales Pulse"}
                            projectDateRange={"March 2025 - August 2025"}
                            siteLink={"https://play.google.com/store/apps/details?id=com.trackify.tikitech&hl=en_IN"}
                            description={"This app allows Tiki Tar Group employees to submit meetings update and track their performance."}
                            tagsList={["flutter", "dart", "notifications", "flutter inappwebview", "image picker", "file picker", "firebase messaging"]} 
                            />
                    </div>
                </div>
            </div>
        </div>
    );
}

interface projectBoxProps {
    projectImage: String,
    projectTitle: String,
    projectDateRange: String,
    githubLink?: String,
    siteLink?: String,
    description: String,
    tagsList: String[]
}

const ProjectBox: React.FC<projectBoxProps> = ({ projectImage, projectTitle, projectDateRange, githubLink, siteLink, description, tagsList }) => {
    return (
        <>
            <div className="p-5">
                <div className="border border-border-shade h-full">
                    <div className="p-4 pb-0 w-full min-h-60 bg-radial-[at_5%_5%] from-[#1b1b1b] via-[#4e4d4d] to-[#818181df] to-100%">
                        <div className="bg-contain bg-no-repeat min-h-60 w-full bg-center" style={{ backgroundImage: `url(${projectImage})` }}></div>
                    </div>
                    <div className="p-4 flex flex-col gap-6">
                        <div className="flex items-start justify-between">
                            <div className="">
                                <p className="text-xl tracking-tighter">{projectTitle}</p>
                                <p className="text-xs text-[#707070]">{projectDateRange}</p>
                            </div>
                            <div className="flex gap-3">
                                {githubLink == null
                                    ? <></>
                                    : <NavLink to={`${githubLink}`} target="_blank">
                                        <img src="/icons/github.png" alt="" className="w-5" />
                                    </NavLink>}
                                {siteLink == null
                                    ? <></>
                                    : <NavLink to={`${siteLink}`} target="_blank">
                                        <img src="/icons/internet.png" alt="" className="w-5" />
                                    </NavLink>}
                            </div>
                        </div>
                        <div className="text-sm text-[#707070]">
                            {description}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {tagsList.map((tag, index) => (
                                <Tags key={index} text={tag} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Projects;