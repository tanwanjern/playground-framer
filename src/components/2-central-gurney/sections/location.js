import React, { useLayoutEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer";
import useScrollPercentage from "../../../hooks/useScrollPercentage";
import GoogleMapReact from 'google-map-react';
import { StaticImage } from "gatsby-plugin-image"
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Location = () => {

    const { width } = useWindowDimensions()
    const mapContainerRef = useRef()
    const [mapRef, mapInView] = useInView({
        root: null,
        // rootMargin: "50px 0px 300px 0px",
        threshold: 0.99
    });

    const scrollPercentage = useScrollPercentage();
    const [animateProgress, setAnimateProgress] = useState(0)

    useLayoutEffect(()=>{
        const mapContainerTopPercentage = (mapContainerRef.current.offsetTop/document.documentElement.scrollHeight) * 100
        if(scrollPercentage > mapContainerTopPercentage + 3){
            setAnimateProgress(10 + (scrollPercentage - (mapContainerTopPercentage + 3)) * 5);
        }else{
            setAnimateProgress(10);
        }
        // mapContainerTopPercentage + 2.5 (60)
        // console.log("value: "+mapContainerRef.current.offsetTop, document.documentElement.scrollTop, document.documentElement.scrollHeight)
        // console.log("scroll percentage: "+scrollPercentage)
        // console.log("map percentage: "+mapContainerTopPercentage)
    },[animateProgress, scrollPercentage, mapContainerRef])

    const mapSettings = {
        center: {
          lat: 5.437848517740787,
          lng: 100.31059488586229
        },
        zoom: 17
    };

    const [mapBorderWidth, setMapBorderWidth] = useState(0)
    useLayoutEffect(()=>{
        if(width < 568){
            setMapBorderWidth(animateProgress*3)
        }else if(width < 768){
            setMapBorderWidth(animateProgress*2.5)
        }else if(width < 992){
            setMapBorderWidth(animateProgress*2.1)
        }else if(width < 1280){
            setMapBorderWidth(animateProgress*1.9)
        }else if(width < 1400){
            setMapBorderWidth(animateProgress*1.8)
        }else{
            setMapBorderWidth(animateProgress*1.75)
        }
    },[width, animateProgress])


    const LocationFeatures = () => {
        return(
                <div className="w-full">
                    <div className="relative z-10 w-full md:border-t border-gray-200">
                        <div className="md:flex flex-row items-top">
                            <div className="flex-1 py-5 px-6 lg:pt-8 lg:pb-12 md:px-10 border-b md:border-r border-gray-200">
                                <p className="text-center md:text-left text-sm lg:text-base tracking-wide italic text-opacity-75">Families & young patrons of neighbouring lifestyle malls, Gurney Plaza & Gurney Paragon (Target Catchment)</p>
                            </div>
                            <div className="flex-1 py-5 px-6 lg:pt-8 lg:pb-12 md:px-10 border-b md:border-r border-gray-200">
                                <p className="text-center md:text-left text-sm lg:text-base tracking-wide italic text-opacity-75">Immediate check-in hotel guests both local & international tourists on leisure & business trips</p>
                            </div>
                            <div className="flex-1 py-5 px-6 lg:pt-8 lg:pb-12 md:px-10 border-b md:border-r border-gray-200">
                                <p className="text-center md:text-left text-sm lg:text-base tracking-wide italic text-opacity-75">Neighbouring mid to high-end residentials within 5km to 10km radius</p>
                            </div>
                            <div className="flex-1 py-5 px-6 lg:pt-8 lg:pb-12 md:px-10 border-b">
                                <p className="text-center md:text-left text-sm lg:text-base tracking-wide italic text-opacity-75">Aprroximate population of 1.3 million within Penang Island comprising locals & expatriates</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return(
        <>
            <section id="location" className="reset" ref={mapContainerRef}>
                <div className="sticky top-0 w-full h-screen overflow-hidden bg-white" ref={mapRef}>

                    <div className="absolute -top-[200px] -left-[150px] -z-1 hidden md:block">
                        <div className="border-2 border-gray-100 rounded-full w-72 h-72 xl:w-[500px] xl:h-[500px]"></div>
                    </div>
                    <div className="absolute top-0 bottom-0 z-40 h-full w-full flex justify-center items-center">
                        <div 
                            style={{ 
                                width: mapBorderWidth + '%' ,
                                opacity: mapBorderWidth > 100 ? 0 : 1
                            }} 
                            className="aspect-square rounded-full border-4 border-cag bg-white"
                        ></div>
                    </div>

                    <div className="absolute top-0 right-0 left-0 bottom-0 z-40 h-full w-full block">
                        <div 
                            className={`w-full h-screen flex items-center`}
                            style={{
                                clipPath: 'circle('+ animateProgress +'% at 50% 50%)',
                            }}
                        >
                            <GoogleMapReact
                                // bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAP_API_KEY }}
                                defaultCenter={mapSettings.center}
                                defaultZoom={mapSettings.zoom}
                                draggable={false}
                                options={{
                                    disableDefaultUI: true,
                                    mapId: process.env.GATSBY_GOOGLE_MAP_ID
                                }}
                                // yesIWantToUseGoogleMapApiInternals
                            >
                            </GoogleMapReact>
                        </div>
                    </div>

                    <div className="relative z-10 h-screen w-full">
                        <div className="absolute left-8 top-28 md:left-10 md:top-10 lg:left-20 lg:top-20 mb-4">
                            <h3 className="text-5xl font-playfair tracking-tight leading-[45px] font-medium">
                                Where Central 
                                <span className="text-cag block italic font-normal">is the centre</span>
                            </h3>
                        </div>
                        <div className="absolute left-8 bottom-8 right-8 md:left-10 md:top-10 lg:top-auto lg:left-auto lg:right-20 lg:bottom-[35%] justify-end flex">
                            <p className="md:w-2/5 lg:w-3/12 font-light text-[15px] tracking-wide leading-relaxed text-black">
                                CAG is surrounded by mid to high range residential neighbourhoods with catchment being just a stone throw away, making it a hub that draws multitudes of residents and visitors within a convenient location
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-[2000px] w-full">
                    <div className={`top-[25.5%] left-[20.5%] md:top-[30%] md:left-[34%] lg:top-[30%] lg:left-[40.5%] ${mapInView && animateProgress > 45 ? 'visible opacity-100 transition-legend':'invisible opacity-0'} w-3 h-3 rounded-full fixed z-40 bg-dark inline-block`}></div>
                    <div className={`top-[20%] left-[22%] md:top-[26%] md:left-[36%] lg:top-[25%] lg:left-[41%] ${mapInView && animateProgress > 45 ? 'visible opacity-100 transition-legend':'invisible opacity-0'} fixed z-40 bg-dark px-4 py-2 inline-block rounded-full`}>
                        <p className="text-white">Gurney Drive Hawker</p>
                    </div>
                    
                    <div className={`top-[45%] left-[38%] md:top-[46%] md:left-[46%] ${mapInView && animateProgress > 35 ? 'visible opacity-100 transition-legend':'invisible opacity-0'} w-3 h-3 rounded-full fixed z-40 bg-dark inline-block`}></div>
                    <div className={`top-[39%] left-[39%] md:top-[40.5%] md:left-[46%] ${mapInView && animateProgress > 35 ? 'visible opacity-100 transition-legend':'invisible opacity-0'} fixed z-40 bg-dark px-4 py-2 inline-block rounded-full`}>
                        <p className="text-white">Gurney Plaza</p>
                    </div>


                    <div className={`top-[50%] left-[49%] md:top-[51%] md:left-[50%] ${mapInView && animateProgress > 30 ? 'visible opacity-100 transition-legend':'invisible opacity-0'} w-3 h-3 rounded-full fixed z-40 bg-cag inline-block`}></div>
                    <div className={`top-[46%] left-[52%] md:top-[46%] md:left-[50.5%] ${mapInView && animateProgress > 30 ? 'visible opacity-100 transition-legend':'invisible opacity-0'} fixed z-40 bg-cag px-4 py-2 inline-block rounded-full`}>
                        <p className="text-white">G-hotel Gurney</p>
                    </div>
                    <div className={`top-[52%] left-[52%] md:top-[51.5%] md:left-[51%] ${mapInView && animateProgress > 30 ? 'visible opacity-100 transition-legend':'invisible opacity-0'} fixed z-40 bg-white px-4 py-2 inline-block rounded-full shadow-lg hover:scale-110`}>
                        <a className="w-20 h-12 flex mx-auto bg-white" href="https://goo.gl/maps/FrvL9BXFMMQgPiDa6" target="_blank" rel="noreferrer">
                            <StaticImage
                                src="../../../images/2-central-gurney/logo.png"
                                width={160}
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt=""
                                objectFit="contain"
                                placeholder="tracedSVG"
                            />
                        </a>
                    </div>
                    
                    <div className={`top-[72%] left-[55%] md:top-[72%] md:left-[52%] ${mapInView && animateProgress > 40 ? 'visible opacity-100 transition-legend':'invisible opacity-0'} w-3 h-3 rounded-full fixed z-40 bg-dark inline-block`}></div>
                    <div className={`top-[66%] left-[54%] md:top-[68%] md:left-[53.2%] ${mapInView && animateProgress > 40 ? 'visible opacity-100 transition-legend':'invisible opacity-0'} fixed z-40 bg-dark px-4 py-2 inline-block rounded-full`}>
                        <p className="text-white">Gurney Paragon</p>
                    </div>
                </div>
                
            </section>
            <LocationFeatures/>
        </>
    )
}

export default Location;


