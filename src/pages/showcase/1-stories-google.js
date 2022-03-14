import React, { useLayoutEffect, useRef } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { useAnimation, motion, useViewportScroll, useTransform, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SplitText } from "../../components/1-stories-google/splitText"
import useWindowDimensions from "../../hooks/useWindowDimensions"

const Showcase1 = () => {

    const { width } = useWindowDimensions();
    const captionRef = useRef(null);

    const { scrollYProgress } = useViewportScroll()
    const yPosAnim = useTransform(scrollYProgress, [0, 1], [0, 100])

    const phoneControls = useAnimation();
    const [phoneRef] = useInView({
        root: null,
        rootMargin: "0px",
        threshold: 0.9
    });
    const phoneVariants = {
        start: { scale: 1, transition: { duration: 1 } },
        end: { scale: 0.8, transition: { duration: 1 } }
    };

    const [usebyRef, usebyInView] = useInView({
        root: null,
        rootMargin: "50px 0px 300px 0px",
        // rootMargin: "500px 0px 100px 0px",
        threshold: 0.4
    });
    useLayoutEffect(() => {
        if (usebyInView) {
            phoneControls.start("end");
        }else{
            phoneControls.start("start");
        }
    }, [phoneControls, usebyInView]);

    return(
        <Layout className={`${usebyInView ? 'bg-gray-800':'bg-transparent'} transition-all`}>
            <Seo title="Showcase 1 - Stories Google" />

            <div className="mx-auto pt-24 pb-16 w-11/12 md:w-5/6 lg:w-4/6 xl:w-3/6 2xl:w-2/6">
                <div className="flex flex-col justify-center items-center">
                    <StaticImage
                        src="https://stories.google/static/img/web-stories-logo.png?cache=7e03646"
                        width={88}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="Icon of google stories"
                        className="mb-5"
                        placeholder="blurred"
                    />
                    <h1 className="hero-headline text-5xl md:text-6xl text-center">
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                            >
                                <strong>
                                    <SplitText
                                        initial={{ y: '100%' }}
                                        animate="visible"
                                        variants={{
                                            visible: i => ({
                                                y: 0,
                                                transition: {
                                                    duration: 0.65,
                                                    delay: 2.2 + (i * 0.1)
                                                }
                                            })
                                        }}
                                    >
                                        Stories
                                    </SplitText>
                                </strong>
                                {' '}
                                <SplitText
                                    initial={{ y: '100%' }}
                                    animate="visible"
                                    variants={{
                                        visible: i => ({
                                            y: 0,
                                            transition: {
                                                duration: 0.65,
                                                delay: 2.4 + (i * 0.1)
                                            }
                                        })
                                    }}
                                >
                                    meet their widest audience ever
                                </SplitText>
                            </motion.div>
                        </AnimatePresence>
                    </h1>
                </div>
            </div>

            <div className="hero relative">
                <motion.div
                    ref={phoneRef}
                    animate={phoneControls}
                    initial="start"
                    variants={phoneVariants}
                    className={`${width > 768 ? 'sticky':'relative'} md:top-0 left-0 w-full z-40`}
                    style={{ y: yPosAnim }}
                >
                    <motion.div 
                        className="hero-phone flex justify-center relative w-3/4 md:w-[380px] mx-auto top-[600px]"
                        // initial={{ y: 400 }}
                        animate={{ y: -600 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="w-full aspect-[9.3/20] bg-black rounded-[50px]"></div>
                        <div className="absolute top-[5%] right-0 left-0">
                            <video
                                className="bg-white w-[95%] h-[92.5%] mx-auto object-cover rounded-3xl overflow-hidden drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                            >
                                <source src="https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0" type="video/mp4"/>
                            </video>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
                    <div className="h-full w-full pt-48 md:pt-36 overflow-hidden">
                        <div className="flex flex-row gap-4 -mx-4 md:mx-8">
                            {
                                Array(width < 768 ? 3:5).fill(0).map((item, index)=>{

                                    const itemTop = ['mt-24', 'mt-8', 'mt-0', 'mt-0', 'mt-36'];

                                    return(
                                        index === (width < 768 ? 1:2) ? (
                                            <div className="w-2/4 md:w-[380px] mx-4" key={"story"+index}></div>
                                        ):(
                                            <motion.div
                                                className={`hero-story w-2/3 pt-[500px] md:flex-1 ${itemTop[index]}`} 
                                                key={"story"+index}
                                                animate={{ y: -400 }}
                                                transition={{ duration: 1, delay: 1 + (0.1 * index), type: "tween" }}
                                            >
                                                <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden translate-z-0">
                                                    <StaticImage
                                                        src="https://lh3.googleusercontent.com/WTVf7YDXhBKR_Mr48EPvuEjsU4zvSGsHl2yBp0S2EHv-a3LT6JqMvEdzxIqWOCV0lS0LuskC429JKYGvMWtohM36qpeeHCeWvhfv=s0"
                                                        aspectRatio={9/16}
                                                        quality={100}
                                                        formats={["auto", "webp", "avif"]}
                                                        alt="Image of google stories"
                                                        placeholder="blurred"
                                                    />
                                                </div>
                                            </motion.div>
                                        )
                                        
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <motion.div
                    className="md:h-screen relative z-30 px-8"
                    ref={usebyRef}
                >
                    <div className="md:flex items-center h-full justify-between">
                        <div className="w-full md:w-1/3 p-10 md:sticky top-0">
                            <p className="text-xl tracking-tight text-white">The tappable story format has never been more accessible—to creators and readers alike. See what happens when Google brings stories to the open web.</p>
                        </div>
                        <div className="w-full md:w-1/3 p-10 md:sticky top-0">
                            <p className="text-lg tracking-tight text-white mb-5">Making an impact at</p>
                            <div className="grid grid-cols-3 gap-4">
                                {
                                    Array(12).fill(0).map((item, index)=>{
                                        return(
                                            <StaticImage
                                                src="https://lh3.googleusercontent.com/-E3n3JJeXPS__QEqOHROLvz4jN-_-r7ND-O0Fil1xREJAQ68o7sq3ajoxQn1yEgtPEzuSowMBN_wTSs8vulGeZ5It4YBGtXvfz45Ng=s0"
                                                width={100}
                                                // aspectRatio={9/16}
                                                quality={100}
                                                formats={["auto", "webp", "avif"]}
                                                alt="Image of google stories"
                                                placeholder="blurred"
                                                key={"logo"+index}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>

            <div className="md:h-screen h-[500px] mb-24 md:mb-0" ref={captionRef}>
                <div className="w-3/4 xl:w-2/4 mx-auto flex justify-center items-center h-full">
                    <h3 className="text-center text-4xl md:text-6xl font-bold">Visual stories that feel like yours, because they are.</h3>
                </div>
            </div>

            <div className="justify-center py-8 flex gap-4">
                <Link to='/' className="link">Go to Home</Link>
                <span className="text-gray-400">/</span>
                <Link to='https://stories.google/' className="link" target={"_blank"}>Visit live site</Link>
            </div>
        
        </Layout>
    )
}

export default Showcase1
