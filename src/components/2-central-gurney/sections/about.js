import React from "react"
import { SplitText } from "../splitText";
import { StaticImage } from "gatsby-plugin-image"

const About = () => {

    const imageProps = {
        layout:"fullWidth",
        quality:45,
        formats:["auto", "webp", "avif"],
        alt:"",
        placeholder:"none",
        transformOptions:{ fit: 'contain' },
    }

    return(
        <section id="about" className="bg-dark z-30 min-h-screen">
            <div className="container mx-auto">
                <div className="md:w-1/2 xl:w-2/5 px-4 mx-auto pt-24 pb-16">
                    <h3 className="text-5xl font-playfair tracking-tight leading-[45px] font-medium text-center md:mb-3 text-white">
                        The Heart of the
                        <span className="text-cag block italic font-normal">Vibrant Penang</span>
                    </h3>
                    <p className="text-white text-opacity-90 text-center leading-loose font-light">
                        <SplitText
                            initial={{ scale: 0.95, filter: 'blur(2px)', opacity: 0, y: 0 }}
                            whileInView="animate"
                            variants={{
                                animate: i => ({
                                    scale: 1,
                                    filter: 'blur(0px)',
                                    opacity: 1,
                                    y: 10,
                                    transition: {
                                        duration: 0.24,
                                        delay: 0.15+(i*0.005),
                                    }
                                })
                            }}
                        >
                            Located in the heart of the vibrant Penang - one of Malaysia’s most fascinating cities with world-acclaimed food, rich history, vibrant cultures and scenic beaches is CAG, the new nexus of food and beverage avenues lifestyle and entertainment.
                            
                            CAG melds both modern and contemporary designs with comfort, welcoming local and international travellers to immerse in the endless vibes of the popular Gurney Drive.
                        </SplitText>
                    </p>
                </div>
            </div>
            <div className="px-16 py-10">
                <p className="text-white text-opacity-50 uppercase font-playfair tracking-widest px-4 text-center">
                    Welcome On Board
                </p>
                <div className="flex flex-row flex-wrap py-6 gap-10 justify-center items-center">
                    <div className="w-2/5 md:w-40">
                        <StaticImage src="../../../images/2-central-gurney/brand/brand-2.png" className="transition-basic hover:opacity-50 filter invert cursor-pointer" {...imageProps}></StaticImage>
                    </div>
                    <div className="w-2/5 md:w-56">
                        <StaticImage src="../../../images/2-central-gurney/brand/brand-1.png" className="transition-basic hover:opacity-50 filter brightness-120 cursor-pointer" {...imageProps}></StaticImage>
                    </div>
                    <div className="w-2/5 md:w-40">
                        <StaticImage src="../../../images/2-central-gurney/brand/brand-3.png" className="transition-basic hover:opacity-50 filter brightness-120 cursor-pointer" {...imageProps}></StaticImage>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About