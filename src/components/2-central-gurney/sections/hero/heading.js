import React from "react"
import { motion } from "framer-motion";
import { SplitText } from "../../splitText";

const Heading = () =>{
        
    const initial = { 
        filter: 'blur(2px)', 
        opacity: 0 
    }

    const animate = {
        filter: 'blur(0px)',
        opacity: 1,
    }

    return(
        <>
            <motion.h1 
                className="text-5xl md:text-[4.5rem] text-center leading-[3rem] md:leading-[3.75rem] tracking-tight font-medium uppercase mb-6"
                initial={{ scale: 0.95 }}
                animate="animate"
                variants={{
                    animate: i => ({
                        scale: 1,
                        transition: {
                            duration: 0.75,
                        }
                    })
                }}
            >
                <SplitText
                    initial={initial}
                    animate="animate"
                    variants={{
                        animate: i => ({
                            ...animate,
                            transition: {
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: 'easeIn'
                            }
                        })
                    }}
                >
                    The New 
                </SplitText>
                <br/>{' '}
                <span className="font-italianno text-[6rem] md:text-[8rem] text-cag capitalize tracking-normal text-center">
                    <SplitText
                        initial={initial}
                        animate="animate"
                        variants={{
                            animate: i => ({
                                ...animate,
                                transition: {
                                    duration: 0.5,
                                    delay: 0.2+(i * 0.1),
                                    ease: 'easeIn'
                                }
                            })
                        }}
                    >
                        Gastronomy
                    </SplitText>
                </span>
                <br/>{' '}
                <SplitText
                    initial={initial}
                    animate="animate"
                    variants={{
                        animate: i => ({
                            ...animate,
                            transition: {
                                duration: 0.5,
                                delay: 0.4+(i * 0.1),
                                ease: 'easeIn'
                            }
                        })
                    }}
                >
                    Icon
                </SplitText>
            </motion.h1>
            <motion.p 
                className="text-center uppercase tracking-widest text-sm text-gray-400 font-light mx-6"
                initial={initial}
                animate="animate"
                variants={{
                    animate: i => ({
                        ...animate,
                        transition: {
                            duration: 0.5,
                            delay: 0.65,
                            ease: 'easeIn'
                        }
                    })
                }}
            >
                A modern and classy retail space, managed by G-Hotel
            </motion.p>
            
            {/* <h1 className="text-[4.5rem] text-center leading-[3.75rem] tracking-tight font-medium uppercase mb-6">
                The New 
                <br/>{' '}<span className="font-italianno text-[8rem] text-cag capitalize tracking-normal">Gastronomy</span>{' '}<br/>
                Icon
            </h1> */}
        </>
    )
}

export default Heading