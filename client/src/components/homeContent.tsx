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
                    <div className="grid grid-cols-1">
                        {/* <div className="border border-border-shade p-8 flex items-center justify-center overflow-hidden w-full h-fit pointer-events-none">
                            <div style={{
                                "--size": "150",
                                "--duration": "8",
                                "--anchor": "90",
                                "--border-width": "2",
                                "--color-from": "#dbd4d4c1",
                                "--color-to": "#e2dddd50",
                                "--delay": "-0s"
                            } as React.CSSProperties} className="pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"></div>

                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeContent;
