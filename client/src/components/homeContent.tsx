import StyleHeading from "./common/styleHeading";
import StyleText from "./common/styleText";


function HomeContent() {
    return (
        // home content goes here
        <section>
            <div className="home w-screen bg-black flex flex-col items-center justify-center px-5 text-white bg-radial-[at_25%_45%] from-[#464545] to-black to-60%">
                <div className="lg:container w-full my-24 text-center">
                    <StyleText className={"capitalize text-2xl"} text={"Best profile award"} />
                    <StyleHeading className={'capitalize text-3xl sm:text-6xl'}>
                        <>Lets start <br /> with the beautiful <br /> presentation.</>
                    </StyleHeading>
                    <div className="text-sm pt-4">
                        A profile delve into the realm of  creativity with excellence and expertise. 
                        <br /> We help businesses and startups launch apps faster, reduce cost and scale with secure code.
                    </div>
                    <div className="h-12"></div>
                    <div className="scale-80 md:scale-100 border border-border-shade flex items-center justify-center overflow-hidden w-full h-fit pointer-events-none">
                        <div className="orbit w-full p-[2px]">

                            <div className="bg-radial-[at_5%_5%] from-[#464545] to-black to-60% flex justify-between items-end gap-6">
                                <div className="flex flex-col flex-1 items-start justify-end h-full w-full">
                                    <div className="bg-no-repeat bg-cover bg-bottom w-50 h-80 sm:w-70 sm:h-70 md:h-60 max-h-full" style={{backgroundImage: `url(/images/vector_danish.png)`}}></div>
                                </div>
                                <div className="flex flex-col justify-between items-start flex-1 gap-7 lg:text-nowrap text-wrap p-6">
                                    <div className="flex flex-col items-start leading-none">
                                        <p className="text-zinc-500 text-xs text-left">Purpose-built for innovation</p>
                                        <p className="bg-clip-text bg-gradient-stop bg-gradient-to-br from-white via-30% via-white to-white/30 w-full h-fit py-2 text-4xl md:text-5xl font-bold text-left text-transparent tracking-tighter">Software <br/>Engineer</p>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="tracking-tighter text-base text-left text-wrap">Building apps, interfaces, & ideas.</p>
                                        <p className="text-left text-base font-light text-zinc-500">Problem solver | Flutter & SQL | Open to opportunities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeContent;
