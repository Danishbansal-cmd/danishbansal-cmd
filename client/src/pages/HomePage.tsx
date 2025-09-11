// import { GradientDiv } from "@/components/gradient/gradientdiv";
// import { useTheme } from "@/components/theme/ThemeContext";
// import { Switch } from "@/components/ui/switch";
import Header from "@/components/header";
import Loader from "@/components/loader";
import Footer from "@/components/footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProfileSection from "@/components/profile";
import { useEffect, useState } from "react";
import FrequentlyAskedQuestions from "@/components/faq";
import { NavLink } from "react-router-dom";
import HorizontalScrollCarousel from "@/components/horizontalScrollCarousel";
import Belief from "@/components/belief";
import HomeContent from "@/components/homeContent";
import Projects from "@/components/projects";




function HomePage() {

    // const { theme, toggleTheme } = useTheme();
    // const isDark = theme === 'dark';

    function getBreakPoint(width: number){
        if(width < 768) return "sm";
        return "lg";
    }

    const [showLoader, setShowLoader] = useState(true);
    const [windowBreakpoint, setWindowBreakpoint] = useState<String | null>(getBreakPoint(window.innerWidth));

    function showTheLoader() {
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 2500);
    }

    useEffect(() => {
        function handleLoad(){
            setShowLoader(false);
        }

        if(document.readyState === "complete"){
            setShowLoader(false);
        }else{
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    // show the laoder only when the screen breaks or changes the breakPoint
    useEffect(() => {
        function handleResize(){
            let newBreakPoint = getBreakPoint(window.innerWidth);
            if(windowBreakpoint !== newBreakPoint){
                showTheLoader();
                setWindowBreakpoint(newBreakPoint);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [windowBreakpoint]);

    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
        // download icon animation
        gsap.to(".download", {
            rotation: 360,
            duration: 2,
            ease: "bounce.out",
            repeat: -1,
            repeatDelay: 1,
        });

    //     gsap.to(".home", {
    //   boxShadow: "0 0 40px 10px rgba(0, 150, 255, 0.6)", // glowing blue aura
    //   repeat: -1,        // infinite loop
    //   yoyo: true,        // go back and forth
    //   duration: 2,       // seconds for each pulse
    //   ease: "power2.inOut"
    // });
    });

    return (
        <div className="w-screen flex flex-col mx-4 md:mx-0 ">
            <Loader className={`${showLoader ? 'flex' : 'hidden'}`}/>

            {/* all the content goes here from header to footer here */}
            <div className={`${showLoader ? 'hidden' : 'block'}`}>
                <Header />

                <HomeContent />

                <HorizontalScrollCarousel />

                <Projects />

                {/* <div className="relative bg-no-repeat bg-cover bg-center min-h-screen grayscale-100"
            style={{ backgroundImage: `url(/images/profile-collage.png)`,}}
            >
                
                The gradient overlay that sits on top of everything
                <GradientDiv className="z-10" />  

                The content you want to "reveal"
                <div className="absolute z-20 p-8">
                    <p className="text-white">hi</p>
                </div>    
            </div> */}

                <ProfileSection />

                <Belief />

                <FrequentlyAskedQuestions />

                {/* Exploring new challenges Section */}
                <section>
                    <div className="w-screen flex flex-col items-center px-5 bg-black text-white">
                        <div className="lg:container w-full py-16">
                            <div className="bg-[#0f0f0f] p-2 border border-[#464141]">
                                <div className="p-8 bg-auto bg-center w-full h-full flex flex-col gap-4 items-center justify-center" style={{ backgroundImage: `url(/gif/bg-space.gif)` }}>
                                    <h1 className="text-3xl sm:text-6xl font-bold [word-spacing:-8px] tracking-tighter text-center">Exploring new challenges</h1>
                                    <NavLink to={"mailto:danishbansal60@gmail.com"}>
                                        <button className="group px-5 py-2 tracking-tight text-white bg-blue-shade-new cursor-pointer duration-200 transition-all active:scale-80 mx-4">
                                            Contact <span className="me gap-2 inline-block transform transition-all group-hover:rotate-[360deg]">Me</span>
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div>
                <h1 className="text-4xl font-bold">Soon it will be updated.</h1>
                <Switch
                    onClick={toggleTheme}
                    checked={isDark}
                    className={`relative inline-flex h-7 w-12 items-center rounded-full`}
                    thumbClassName='data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-[3px] w-5 h-5 '
                />
            </div> */}
                <Footer />
            </div>
        </div>
    );
}


export default HomePage;