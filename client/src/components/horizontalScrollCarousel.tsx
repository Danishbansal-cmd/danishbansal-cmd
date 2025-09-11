import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";


function HorizontalScrollCarousel(){
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-35%"]);

    return (
        <section ref={targetRef} className="relative h-[600vh] bg-black py-20 
        bg-radial-[at_90%_55%] from-[#303030] to-black at-50%" >
            <div className="sticky top-0 flex flex-col items-start overflow-hidden text-white">
                <div className="text-center w-full text-4xl font-bold pt-10 p-4" style={{wordSpacing: "-5px"}}>Look at the glances of the work</div>
                <div className="w-full text-center text-sm px-4">The work that has been completed over the years witht the expertise includes the process, design and result of the estonishing craft.</div>
                <motion.div style={{x}} className="flex items-center justify-center gap-4 pt-10">
                    {
                        cardList.map((card, index) => {
                            return <Card card={card} key={index} />
                        })
                    }
                </motion.div>
                <div className="text-center w-full flex justify-center py-12">
                    <button onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("profile_about")?.scrollIntoView({behavior: "smooth"});
                    }} className="group px-5 py-2 tracking-tight text-white bg-blue-shade-new hover:text-white cursor-pointer duration-200 transition-all active:scale-80 mx-4">
                        Get To Know <span className="me gap-2  inline-block transform transition-all group-hover:rotate-[360deg]">Me</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

const Card : React.FC<({card: CardType})> = ({card}) => {
    return (
        <div className="relative group w-[300px] h-[300px] border border-border-shade overflow-hidden p-4 bg-background-shade">
            <div className="w-full h-full z-0 transition-transform duration-300 group-hover:scale-110 bg-cover bg-no-repeat" style={{backgroundImage: `url(${card.fileName})`,
          backgroundPosition: "right",}}></div>
        </div>
    );
}

interface CardType {
    fileName: String,
}

const cardList : CardType[] = [
    {
        fileName: "/images/work_1.png"
    },
    {
        fileName: "/images/work_2.png"
    },
    {
        fileName: "/images/work_3.png"
    },
    {
        fileName: "/images/work_4.png"
    },
    {
        fileName: "/images/work_5.png"
    },
    {
        fileName: "/images/work_6.png"
    },
]


export default HorizontalScrollCarousel;
