import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { NavLink } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";



function ProfileSection() {
    const ValueTag: React.FC<{ value?: String }> = ({ value = "" }) => {
        return (
            <div className="border border-[#464141] w-max px-4 py-1">{value}</div>
        );
    };


    return (
        // profile Section
        <section>
            <div className="w-screen flex flex-col items-center px-5 bg-black text-white">
                <div className="lg:container w-full py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 bg-[#0f0f0f] p-1">
                        <div className="flex flex-col gap-8 col-span-2 px-8 py-10">
                            <p className="text-3xl sm:text-5xl font-bold">Experience Designer & Developer</p>
                            <p className="text-xs">Specialising in building scalable web and mobile applications, I bring expertise in frontend development using modern frameworks for the web and Flutter for mobile, paired with robust backend development in Node.js. With a strong foundation in creating seamless user experiences, I focus on delivering performant, secure, and maintainable applications. Passionate about continuous learning, problem-solving, and leveraging emerging technologies, I aim to craft end-to-end digital solutions that drive business impact and user satisfaction across industries.</p>
                            <NavLink to={"https://docs.google.com/document/d/1wc0s1uKjlFkL4_J9jP38_Pr_1xs00Vls/edit?usp=sharing&ouid=106471281902682972298&rtpof=true&sd=true"} target="_blank" className="flex items-center gap-2 w-max bg-blue-shade-new px-5 py-2 tracking-tight text-white hover:text-white cursor-pointer duration-200 transition-all active:scale-80">
                                Download Resume <AiOutlineDownload className="download text-2xl" />
                            </NavLink>
                        </div>
                        <div className="p-2 border border-[#464141]">
                            <div style={{ backgroundImage: `url(/images/profile_image.png)` }} className="min-h-96 h-full w-full p-2 bg-cover bg-center bg-no-repeat" />
                        </div>
                    </div>
                </div>

                {/* info section */}
                <div className="lg:container w-full py-4">
                    <div className="flex flex-col items-center justify-center gap-4">
                        {/* Experience */}
                        <div id="experience" className="bg-[#0f0f0f] p-2 border border-[#464141] w-full">
                            <Accordion type="single" collapsible className="px-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-3xl font-bold" >Experience</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="py-4 flex flex-col gap-14">
                                            <div>
                                                <p style={{ fontFamily: "Sirivennela" }} className="text-xl italic">Freelancer, Punjab, India</p>
                                                <p className="text-xl">Application Developer</p>

                                                <div className="flex flex-col sm:flex-row gap-2 mt-8">
                                                    {<ValueTag value={"JUNE 2024 - PRESENT"} />}
                                                    {<ValueTag value={"FULL-TIME"} />}
                                                    {<ValueTag value={"FROM HOME"} />}
                                                </div>

                                                <p className="text-xs mt-6">
                                                    Built and deployed cross-platform mobile applications using Flutter with RESTful API integration and secure authentication, Integrated many sdks like zoho for authentication.
                                                    <br />
                                                    <br />
                                                    Collaborated with clients to gather requirements, and deliver functional MVPs within tight deadlines.
                                                    <br />
                                                    <br />
                                                    Implemented Riverpod for scalable state management, ensuring maintainable and testable app architecture.
                                                    <br />
                                                    <br />
                                                    Integrated third-party services such as Firebase, Google Maps, and payment gateways based on project requirements.
                                                </p>
                                            </div>

                                            <hr className="border-border-shade" />

                                            <div>
                                                <p style={{ fontFamily: "Sirivennela" }} className="text-xl italic">Bonafide Technologies, Chandigarh, Punjab, India</p>
                                                <p className="text-xl">Flutter Application Developer Intern</p>

                                                <div className="flex flex-col sm:flex-row gap-2 mt-8">
                                                    {<ValueTag value={"MAR 2022 - AUG 2022"} />}
                                                    {<ValueTag value={"FULL-TIME"} />}
                                                    {<ValueTag value={"FROM SITE"} />}
                                                </div>

                                                <p className="text-xs mt-6">
                                                    Designed and build a responsive application for both iOS & android. Reduced and Optimize the API calling from the application.
                                                    <br />
                                                    <br />
                                                    Implemented the State management in the application to persist the user data in the memory and user session.
                                                    <br />
                                                    <br />
                                                    Created an extension for the Zoho platform using PHP and Javascript. In which, details provided over the call are automatically updated in their databases.
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Education */}
                        <div className="bg-[#0f0f0f] p-2 border border-[#464141] w-full ">
                            <Accordion type="single" collapsible className="px-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-3xl font-bold" >Education</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="py-4 flex flex-col gap-14">
                                            <div>
                                                <p style={{ fontFamily: "Sirivennela" }} className="text-xl italic">Chandigarh University, Gharuan, Punjab </p>
                                                <p className="text-xl">B.Tech in Computer Science Engineerin</p>

                                                <div className="flex flex-col sm:flex-row gap-2 mt-8">
                                                    {<ValueTag value={"2024 - 2027"} />}
                                                    {<ValueTag value={"CGPA: 8.5"} />}
                                                    {<ValueTag value={"GRADE FIRST"} />}
                                                </div>

                                                <p className="text-xs mt-6">
                                                    Improving core problem solving concepts using the Data Structure and Algorithrm
                                                    <br />
                                                    <br />
                                                    Persisted the average cgpa score of 8.5 throught each semester
                                                    <br />
                                                    <br />
                                                    Vastly learned and Implemented the databases in various different projects at core level as well as Optimize the queries.
                                                </p>
                                            </div>

                                            <hr className="border-border-shade" />

                                            <div>
                                                <p style={{ fontFamily: "Sirivennela" }} className="text-xl italic">Northern Pures, Toronto, Canada </p>
                                                <p className="text-xl">Diploma in Computer Engineering Technician</p>

                                                <div className="flex flex-col sm:flex-row gap-2 mt-8">
                                                    {<ValueTag value={"AUG 2022 - APRIL 2024"} />}
                                                    {<ValueTag value={"CGPA: 4.3/5"} />}
                                                    {<ValueTag value={"GRADE FIRST"} />}
                                                </div>

                                                <p className="text-xs mt-6">
                                                    Mainly focusing on the networking part of the computers and nodes, that are interconnected in the network.
                                                    <br />
                                                    <br />
                                                    Had hands-on learning practise sessions on cisco-packet tracer to learn about the networks and its different components and types.
                                                    <br />
                                                    <br />
                                                    Creating the secure communication between the computers and the wires used for the purposes, includes all the information and made one capable to implement such in real life.
                                                </p>
                                            </div>

                                            <hr className="border-border-shade" />

                                            <div>
                                                <p style={{ fontFamily: "Sirivennela" }} className="text-xl italic">Government Polytechnic College, Bathinda, Punjab, India </p>
                                                <p className="text-xl">Diploma in Computer Science & Engineering</p>

                                                <div className="flex flex-col sm:flex-row gap-2 mt-8">
                                                    {<ValueTag value={"AUG 2018 - MAy 2021"} />}
                                                    {<ValueTag value={"CGPA: 8.4"} />}
                                                    {<ValueTag value={"GRADE FIRST"} />}
                                                </div>

                                                <p className="text-xs mt-6">
                                                    Acquainted with the basics of the computer and its working principles. Learned about different programming languages like Java, C.
                                                    <br />
                                                    <br />
                                                    Focusing on the base along with that learned about the mathematics, physics and chemistry and its implementation.
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Licenses and Achievements */}
                        <div className="bg-[#0f0f0f] p-2 border border-[#464141] w-full ">
                            <Accordion type="single" collapsible className="px-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-3xl font-bold" >Achievements</AccordionTrigger>
                                    <AccordionContent>
                                        <div>                                            <div>
                                                <p style={{ fontFamily: "Sirivennela" }} className="text-xl italic">leetcode </p>
                                                <p className="text-xl">Problem Solving</p>

                                                <div className="flex flex-col sm:flex-row gap-2 mt-8">
                                                    {<ValueTag value={"LEETCODING"} />}
                                                    {<ValueTag value={"DATA STRUCTURES & ALGORITHMS"} />}
                                                </div>

                                                <p className="text-xs mt-6">
                                                    Solved more than 180+ questions on leetcode across diverse topics.
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfileSection;
