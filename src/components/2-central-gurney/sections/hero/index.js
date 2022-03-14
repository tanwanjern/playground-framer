import React, { useRef, useLayoutEffect } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "./heading";
import { StaticImage } from "gatsby-plugin-image"
import useScrollPercentage from "../../../../hooks/useScrollPercentage";

const HeroInner = () => {

    // useLayoutEffect(()=>{
    //     console.log(document.documentElement.scrollHeight) // 6938
    // }, [])

    const scrollPercentage = useScrollPercentage()
    const { scrollYProgress } = useViewportScroll()
    const xLeft = useTransform(scrollYProgress, x => x * -6938/2.5, {ease: false})
    const xRight = useTransform(scrollYProgress, x => x * 6938/2.5, {ease: false})
    const yTop = useTransform(scrollYProgress, y => {
        // console.log(y * -3000)
        return (y * -6938/1.2) < -420 ? -420 : y * -6938/1.2;
    }, {ease: false})
    const yBottom = useTransform(scrollYProgress, y => y * 6938/2.5, {ease: false})

    const [heroRef, heroInView] = useInView()
    const [subHeadlineRef] = useInView({threshold: 0.8})
    const [captionRef] = useInView()
    const [highlightRef, highlightInView] = useInView({
        root: null,
        rootMargin: "500px 0px 0px 0px",
        threshold: 0.5
    });

    const highlightBoxRef = useRef(null)
    const rotateVariant = {
        animate: {
            rotate: [0, 360],
            transition: {
                rotate: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 8,
                    type: 'spring'
                },
            },
        },
    };
    const imageProps = {
        layout:"fullWidth",
        quality:45,
        formats:["auto", "webp", "avif"],
        alt:"",
        placeholder:"none",
        className:"h-full",
        transformOptions: { fit: "cover" }
    }
    const videoRef = useRef();

    useLayoutEffect(() => { 
        videoRef.current.play(); 
    },[]);

    return(
        <section id="hero" ref={heroRef}>

            <div className="relative z-20 w-full overflow-hidden bg-white">
                <div className="container mx-auto pt-36 lg:py-24 px-5">
                    <Heading/>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <motion.div 
                    className={`fixed top-[420px] h-full ${heroInView ? 'visible':'invisible'} right-0 left-0 z-10 will-change-transform`}
                    style={{ y: yTop }}
                >
                    <div className={`relative w-full h-full bg-white`}>
                        <motion.div className="w-[25vw] md:w-[30vw] lg:w-[35vw] bg-white h-full absolute -left-5 md:-left-20 lg:left-0 top-0 bottom-0 z-10 will-change-transform" style={{ x: xLeft }}></motion.div>
                        <motion.div
                            className={`relative w-full h-screen ${heroInView ? "transition-all duration-[600ms] ease-in-out":""} ${highlightInView ? "":"mx-auto"} will-change-transform`}
                            style={{
                                y: highlightInView ? highlightBoxRef.current.offsetTop : 0, 
                                x : highlightInView ? highlightBoxRef.current.offsetLeft : 0,
                                width: highlightInView ? highlightBoxRef.current.clientWidth : '100%',
                                height: highlightInView ? highlightBoxRef.current.clientHeight : '100%',
                            }}
                        >
                            <video 
                                className={`${scrollPercentage > 8 ? 'opacity-0':'opacity-100'} ${highlightInView ? 'h-full':'h-screen filter brightness-75'} w-full object-cover absolute top-0 left-0 transition-opacity duration-200 ease-out z-[5]`}
                                ref={videoRef}
                                autoPlay
                                muted
                                loop
                            >
                                <source src="/2-central-gurney/hero-mid.mp4" type="video/mp4"/>
                            </video>
                            <img 
                                src="/2-central-gurney/hero-mid-1.png" 
                                className={`${highlightInView ? 'h-full':'h-screen filter brightness-75'} w-full object-cover will-change-transform`}
                                style={{ objectPosition: highlightInView ? '50% 23%': '50% 50%' }}
                                alt=""
                            />
                        </motion.div>
                        <motion.div className="w-[25vw] md:w-[30vw] lg:w-[35vw] bg-white h-full absolute -right-5 md:-right-20 lg:right-0 top-0 z-10" style={{ x: xRight }}></motion.div>
                    </div>
                </motion.div>

                <div className={`relative z-20 h-screen w-full ${heroInView ? 'visible':'invisible'}`}>
                    <div className="absolute top-0 -right-40 -z-1 hidden lg:block">
                        <div className="border-[3px] border-cag rounded-full w-72 h-72 xl:w-96 xl:h-96"></div>
                    </div>
                    <div className="h-full w-full">
                        <motion.div className="left-[-15vw] lg:left-[12.5vw] absolute bottom-0 top-0 h-screen will-change-transform" style={{ x: xLeft, y: yBottom }}>
                            <div className="w-[30vw] lg:w-[20vw] h-full flex flex-col justify-center">
                                <div className="w-full h-[50vh] lg:h-[20vw] mb-5"><StaticImage src="../../../../images/2-central-gurney/hero/hero-1.png" {...imageProps}></StaticImage></div>
                                <div className="w-full hidden lg:block lg:h-[20vw]"><StaticImage src="../../../../images/2-central-gurney/hero/hero-1.png" {...imageProps}></StaticImage></div>
                            </div>
                        </motion.div>
                        <motion.div className="right-[-15vw] lg:right-[12.5vw] absolute bottom-0 top-0 h-screen will-change-transform" style={{ x: xRight, y: yBottom }}>
                            <div className="w-[30vw] lg:w-[20vw] h-full flex flex-col justify-center">
                                <div className="w-full h-[50vh] lg:h-[20vw] mb-5"><StaticImage src="../../../../images/2-central-gurney/hero/hero-1.png" {...imageProps}></StaticImage></div>
                                <div className="w-full hidden lg:block lg:h-[20vw]"><StaticImage src="../../../../images/2-central-gurney/hero/hero-1.png" {...imageProps}></StaticImage></div>
                            </div>
                        </motion.div>
                        <motion.div className="hidden lg:block lg:left-[-5vw] absolute bottom-0 top-0 h-screen" style={{ x: xLeft, y: yBottom }}>
                            <div className="w-[15vw] h-full flex flex-col justify-center">
                                <div className="h-[50vh] w-full">
                                    <StaticImage src="../../../../images/2-central-gurney/hero/hero-1.png" {...imageProps}></StaticImage>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="hidden lg:block lg:right-[-5vw] absolute bottom-0 top-0 h-screen" style={{ x: xRight, y: yBottom }}>
                            <div className="w-[15vw] h-full flex flex-col justify-center">
                                <div className="h-[50vh] w-full"><StaticImage src="../../../../images/2-central-gurney/hero/hero-1.png" {...imageProps}></StaticImage></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                <div className={`relative z-40 w-full mt-48 ${highlightInView ? 'invisible opacity-0':'visible opacity-100'} transition-basic`} ref={subHeadlineRef}>
                    <div className="flex items-center justify-center text-center px-24">
                        <h2 className="text-5xl md:text-7xl text-white leading-[3.5rem] md:leading-8 tracking-normal uppercase">
                            Pinnacle of a <br/>
                            <span className="text-[105px] md:text-9xl leading-[3rem] font-italianno text-secondary lowercase">lifestyle trendy </span><br/>
                            hangout 
                        </h2>
                    </div>
                </div>

                <div className={`relative z-40 w-full ${highlightInView ? 'invisible':'visible'}`} ref={captionRef}>
                    <div className="flex flex-col items-center text-center w-2/3 md:w-2/5 h-full mx-auto pb-72 pt-16">
                        <p className="text-white">
                            Central @Gurney, set the stage to be the pinnacle of a lifestyle trendy hangout where individuals converge to build connections or indulge in solitude of the many spaces for a gastronomical journey and services alike.
                        </p>
                    </div>
                </div>

                <div className={`h-[700px] relative z-30`} ref={highlightRef}>
                    <div className={`w-full h-full top-0 fixed ${highlightInView ? 'visible':'invisible'}`}>
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="w-full lg:w-[968px] xl:w-[1200px] px-4 mx-auto mb-3 md:mb-5">
                                <div className="md:flex flex-row flex-wrap">
                                    <h2 className="text-5xl md:text-7xl xl:text-[80px] uppercase text-left break-words">Transforming</h2>
                                    <div className="md:flex-1 w-full h-[70px] md:ml-10 mt-3" ref={highlightBoxRef}></div>
                                </div>
                            </div>
                            <div className="w-full lg:w-[968px] xl:w-[1200px] px-4 mx-auto mb-3 md:mb-5">
                                <div className="flex flex-col md:flex-row-reverse">
                                    <h2 className="text-5xl md:text-7xl xl:text-[80px] uppercase text-left md:text-right">The way people</h2>
                                    <div className="md:flex-1 bg-gray-200 w-full h-[70px] mr-10 mt-3">
                                        <img src="/2-central-gurney/highlight-3.png" className="w-full h-full object-cover" style={{ objectPosition: '50% 95%' }} alt=""></img>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-[968px] xl:w-[1200px] px-4 mx-auto">
                                <div className="flex flex-row flex-wrap md:justify-between items-center gap-3 md:gap-0">
                                    <h2 className="text-5xl md:text-7xl xl:text-[80px] uppercase text-left">Meet</h2>
                                    <motion.div 
                                        className={`w-12 h-12 md:w-20 md:h-20 rounded-full ${highlightInView ? 'transition-all duration-300':''}"`}
                                        style={{
                                            transform: highlightInView ? 'scale(1)':'scale(0)'
                                        }}
                                    >
                                        <StaticImage src="../../../../images/2-central-gurney/highlight/highlight-1.png" {...imageProps}></StaticImage>
                                    </motion.div>
                                    <h2 className="text-5xl md:text-7xl xl:text-[80px] uppercase text-left">Dine</h2>
                                    <motion.div 
                                        className="w-12 h-12 md:w-20 md:h-20 rounded-full"
                                        variants={rotateVariant}
                                        animate="animate"
                                    >
                                        <StaticImage src="../../../../images/2-central-gurney/highlight/highlight-2.png" {...imageProps}></StaticImage>
                                    </motion.div>
                                    <h2 className="text-5xl md:text-7xl xl:text-[80px] uppercase text-left">Chill out</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

const Hero = () => {
    return(
        <HeroInner/>
    )
  
}

export default Hero
