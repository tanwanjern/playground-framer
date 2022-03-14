import React from "react"
import { motion } from "framer-motion";
import Slider from "./slider";
import { StaticImage } from "gatsby-plugin-image"

const Plan = () => {

    const marqueeVariants = {
        animate: {
            x: [0, -2000, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                },
            },
        },
    };

    return(
        <section id="plan">
            <div className="container mx-auto">
                <div className="pt-16 md:pt-24 pb-12 px-4">
                    <h3 className="text-5xl font-playfair tracking-tight leading-[45px] font-medium text-center mb-3">
                        A Bustling
                        <span className="text-cag block italic font-normal">New Address</span>
                    </h3>
                    <p className="md:w-2/5 mx-auto text-gray-500 font-light text-[15px] text-center tracking-wide">
                        Marrying form and functionality, make your mark here at CAG with a distinguished business address and a conducive environment for all food, drinks and lifestyle enthusiast.
                    </p>
                </div>
            </div>

            <div className="absolute top-[180px] -right-20 -z-1 hidden md:block">
                <div className="border-[3px] border-cag rounded-full w-72 h-72 xl:w-96 xl:h-96"></div>
            </div>

            <Slider/>
            
            <div className="w-auto overflow-hidden py-10 md:py-16 relative">
                <motion.div 
                    className="h-20"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    <div className="font-playfair text-6xl md:text-7xl tracking-tight whitespace-nowrap absolute">
                        50,000 sqft nett lettable area • Shoplots • Kiosk • AI Frescos • 
                        50,000 sqft nett lettable area • Shoplots • Kiosk • AI Frescos
                    </div>
                </motion.div>
            </div>
            

            <div className="bg-dark md:h-screen">
                <div className="flex flex-row flex-wrap h-full justify-center">
                    <div className="w-full py-8 md:flex-1 md:h-full flex justify-center items-center md:order-2">
                        <h3 className="text-5xl font-playfair tracking-tight leading-[45px] font-medium text-center md:mb-3 text-white">
                            Retail
                            <span className="text-cag block italic font-normal">Layout Plan</span>
                        </h3>
                    </div>
                    <div className="w-3/4 sm:w-2/5 md:flex-1 md:border-r border-gray-200 border-opacity-10 md:h-full md:order-1 mb-8">
                        <div className="flex flex-col justify-center items-center md:h-full">
                            <p className="uppercase text-white text-opacity-50 tracking-widest mb-3">Ground Floor</p>
                            <div className="w-3/4 xl:w-3/5 aspect-[3/3.5] mb-5 p-3">
                                <StaticImage 
                                    src="../../../../images/2-central-gurney/plan/ground-floor-plan.png"
                                    layout="fullWidth"
                                    quality={45}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                    placeholder="none"
                                ></StaticImage>
                            </div>
                            <a href="/" target="_blank" className="bg-white bg-opacity-10 hover:bg-cag hover:text-white transition-basic px-10 py-3 uppercase text-white text-opacity-50 tracking-widest">Download</a>
                        </div>
                    </div>
                    <div className="w-3/4 sm:w-2/5 md:flex-1 md:border-l border-gray-200 border-opacity-10 md:h-full md:order-3 mb-8">
                        <div className="flex flex-col justify-center items-center md:h-full">
                            <p className="uppercase text-white text-opacity-50 tracking-widest mb-3">Ground Floor</p>
                            <div className="w-3/4 xl:w-3/5 aspect-[3/3.5] mb-5 p-3">
                                <StaticImage 
                                    src="../../../../images/2-central-gurney/plan/first-floor-plan.png"
                                    layout="fullWidth"
                                    quality={45}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                    placeholder="none"
                                ></StaticImage>
                            </div>
                            <a href="/" target="_blank" className="bg-white bg-opacity-10 hover:bg-cag hover:text-white transition-basic px-10 py-3 uppercase text-white text-opacity-50 tracking-widest">Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}




export default Plan;
