import React, { useLayoutEffect, useRef } from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// https://egghead.io/blog/how-to-animate-elements-when-in-view-on-scroll-with-framer-motion

const BasicPage = () => {

    const squareVariants = {
        visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 }
    };

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useLayoutEffect(() => {
        if (inView) {
            controls.start("visible");
        }else{
            controls.start("hidden");
        }
    }, [controls, inView]);

    return(
        <Layout>
            <Seo title="Home" />
            <div className="container mx-auto h-[1200px]">
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={squareVariants}
                    className="w-16 h-16 bg-blue-500"
                ></motion.div>
            </div>
        </Layout>
    )
}

export default BasicPage
