import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";



function FrequentlyAskedQuestions() {
    const questionAnswers = [
        { question: "How many years of experience do you have in industry?", answer: "I have more than 2 years of experience, worked on multiple projects for free as well as paid, currently working as freelancer" },
        { question: "Do you work alone or has a team?", answer: "I have experience working with both, I have collaborated with teams to deliver the product as well as a solo creator also." },
        { question: "What payment methods are accepted?", answer: "Payments can be made online via bank transfer , e-wallets, or credit cards. On-site payments are also available for certail services." }
    ]

    const NumberTag: React.FC<({ value: number })> = ({ value }) => {
        return (
            <div className="p-2 w-8 h-8 flex items-center justify-center border border-border-shade bg-background-shade">
                {value}
            </div>
        );
    }
    return (
        <div className="w-screen flex flex-col items-center justify-center bg-black text-white px-5">
            <div className="lg:container w-full border border-border-shade mt-12 pt-8">
                <div style={{ fontFamily: "Sirivennela" }} className="text-2xl text-center">Frequently Asked Questions</div>
                <div className="text-5xl text-center font-sans -mt-1.5">Quick Answers</div>

                {/* the question and answer goes here */}
                <div className="">
                    <ol className="pt-6" type='1' >
                        {
                            questionAnswers.map((qA, index) => (
                                <li key={index}>
                                    {/* <div className="flex items-center pl-3"> */}
                                    <Accordion type="single" collapsible className="px-6 w-full">
                                        <AccordionItem value="item-1">
                                            <div className="flex gap-4 items-center w-full">
                                                <NumberTag value={index + 1} />
                                                <div className="w-full">
                                                    <AccordionTrigger >{qA.question}</AccordionTrigger>
                                                </div>
                                            </div>
                                            <AccordionContent>
                                                <div className="px-6 py-4 bg-background-shade flex flex-col gap-14 border border-border-shade">
                                                    {qA.answer}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    {/* </div> */}
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>

        </div>
    );
}


export default FrequentlyAskedQuestions;
