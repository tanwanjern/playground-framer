import React from "react"

const Contact = () => {

    return(
        <section id="contact" className="bg-dark h-screen w-full">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex-1 flex items-center justify-center h-full">
                    <button 
                        // onClick={() => {
                        //     setModal(<Modal/>)
                        // }}
                        className="md:w-[500px] md:h-[500px] p-10 aspect-square border border-white border-opacity-25 hover:border-opacity-50 transition-basic rounded-full flex items-center justify-center relative overflow-hidden">
                        <h3 className="text-4xl md:text-5xl font-playfair tracking-tight leading-[35px] md:leading-[45px] font-medium text-center text-white">
                            Register Your
                            <span className="text-cag block italic font-normal">Interest</span>
                        </h3>
                    </button>
                </div>
                
                <div className="py-10 text-center">
                    <p className="text-white font-light text-sm mb-1">Copyright © 2022 G Hotel. All rights reserved.</p>
                    <p className="text-white text-opacity-50 font-light text-sm">All pictures shown are illustration purposes only.</p>
                </div>
            </div>
        </section>
    )
}

export default Contact;
