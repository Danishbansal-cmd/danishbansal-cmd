import StyleHeading from "./common/styleHeading";
import StyleText from "./common/styleText";



function Belief() {
    return (
        <div className="w-screen bg-black flex flex-col items-center justify-center px-5
        bg-radial-[at_10%_45%] from-[#464545]  to-black to-70%">
            <div className="lg:container w-full text-white py-10 mt-8">
                <div className="flex flex-col items-center justify-center pb-12">
                    <StyleText className={"capitalize text-2xl"} text={"Belief"} />
                    <StyleHeading className={'text-3xl sm:text-4xl'}>
                        <>The law of life is the <br /> law of belief.</>
                    </StyleHeading>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-6 bg-background-shade">
                        <div className="w-full h-full min-h-[700px] bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(/images/belief_cum_design.png)`}}></div>
                    </div>
                    <div className="border border-border-shade p-6 bg-background-shade">
                        <div className="py-4 pb-12">
                            <StyleText text={"Good design is good business."} />
                            <p className="text-4xl " style={{letterSpacing: "-2px",}}>Designers actually can change the world, for the better by making the complicated, simple and finding beauty in truth.</p>
                        </div>
                        <div className="w-full min-h-96 bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(/images/belief_illustration.jpg)`}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Belief;

