import React from 'react';

const About = () => {
    const [openIndex, setOpenIndex] = React.useState(null);
    
   const faqs = [
    {
        question: "What does Vyom Garud UAV Solutions specialize in?",
        answer: "Vyom Garud focuses on designing and developing advanced UAV systems aimed at transforming medical logistics and improving the delivery of critical healthcare supplies.",
    },
    {
        question: "How do UAVs support medical logistics?",
        answer: "Our UAVs enable rapid, reliable, and efficient transportation of essential resources—such as blood, vaccines, and emergency equipment—helping ensure access even in remote or hard-to-reach areas.",
    },
    {
        question: "Are the UAV systems customizable?",
        answer: "Yes, our UAV platforms can be tailored for different medical, logistical, or operational needs, depending on mission requirements.",
    },
    {
        question: "What makes Vyom Garud's technology unique?",
        answer: "We combine cutting-edge aeronautical engineering with practical, real-world applications to create UAV systems that are fast, efficient, and optimized for medical delivery missions.",
    },
];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div id="about"className="min-h-screen bg-black flex items-center justify-center py-16 px-8">
                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-10 gap-12 items-stretch">
                    <div className="md:col-span-4 min-h-[500px]">
                        <img
                            className="w-full h-full rounded-xl object-cover"
                            src="/drone.jpg"
                            alt="Drone"
                        />
                    </div>
                    <div className="md:col-span-6 w-full flex flex-col justify-center">

                        <h1 className="text-4xl font-semibold text-white leading-tight">About Us: </h1>
                        <p className="text-2xl text-slate-400 mt-6 pb-8 leading-tight">
                            Aerial innovation for faster, safer, and smarter healthcare access.
                        </p>
                        {faqs.map((faq, index) => (
                            <div 
                                className="border-b border-slate-700 py-6 cursor-pointer" 
                                key={index} 
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-3xl font-medium text-white leading-normal">
                                        {faq.question}
                                    </h3>
                                    <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 18 18" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
                                    >
                                        <path 
                                            d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" 
                                            stroke="#ffffff" 
                                            strokeWidth="1.5" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                        />
                                    </svg>
                                </div>
                                <p 
                                    className={`text-2xl text-slate-400 transition-all duration-500 ease-in-out max-w-2xl leading-tight ${
                                        openIndex === index 
                                            ? "opacity-100 max-h-[300px] translate-y-0 pt-6" 
                                            : "opacity-0 max-h-0 -translate-y-2 overflow-hidden"
                                    }`}
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;