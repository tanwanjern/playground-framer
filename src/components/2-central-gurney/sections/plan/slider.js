import React, { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { StaticImage } from "gatsby-plugin-image"

import 'swiper/css';
import "swiper/css/navigation";

const Slider = () => {

    const itemProps = {
        layout:"fullWidth",
        quality:45,
        formats:["auto", "webp", "avif"],
        alt:"",
        placeholder:"blurred",
    }

    const [modal, setModal] = useState(0)

    const InteriorImage = ({index}) => {
        switch(index){
            case 1:
                return <StaticImage src={`../../../../images/2-central-gurney/interior/interior-1.png`} {...itemProps}/>
            case 2:
                return <StaticImage src={`../../../../images/2-central-gurney/interior/interior-2.png`} {...itemProps}/>
            default:
                return <StaticImage src={`../../../../images/2-central-gurney/interior/interior-3.png`} {...itemProps}/>
        }
    }

    return(
        <>
            <Swiper
                className="swiper-interior"
                centeredSlides={true}
                initialSlide={2}
                modules={[Navigation]}
                navigation={true}
                spaceBetween={16}
                slidesPerView={1.75}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                        centeredSlides: false,
                        initialSlide: 0
                    },
                }}
            >
                {[...Array(3).keys()].map((item, i) => (
                    <SwiperSlide key={"interior"+item}>
                        <div className="aspect-video bg-gray-200 relative">
                            <button className="absolute z-50 w-full h-full" onClick={()=>setModal(i+1)}></button>
                            <InteriorImage index={i+1}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={`modal ${modal !== 0 ? 'visible opacity-100':'invisible opacity-0'} transition-basic`}>
                <button 
                    onClick={()=>setModal(0)}
                    className="absolute top-0 right-0 flex flex-col justify-center items-center w-20 h-20 ml-auto mr-6 transition-basic z-50" >
                        <div className="transition-basic transform rotate-45 translate-y-[21px] bg-white w-2/4 h-[1.5px] mb-5"></div>
                        <div className="transition-basic transform -rotate-45 bg-white w-2/4 h-[1.5px]"></div>
                </button>
                <div className="bg-black bg-opacity-75 p-3 w-full h-full flex items-center justify-center">
                    <div className="w-11/12 lg:w-[100vh] mx-auto">
                        <InteriorImage index={modal}/>
                    </div>
                </div>    
            </div>
        </>
    )
}

export default Slider;