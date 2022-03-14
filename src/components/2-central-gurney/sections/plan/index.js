import React from "react"
import { motion } from "framer-motion";

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
            
        </section>
    )
}




export default Plan;
