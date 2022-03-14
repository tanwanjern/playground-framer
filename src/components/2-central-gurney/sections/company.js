import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Comapny = () => {

    return(
        <section id="company">
             <div className="absolute -top-48 -left-20 -z-1">
                <div className="border-[3px] border-gray-100 rounded-full w-96 h-96 xl:w-[500px] xl:h-[500px]"></div>
            </div>
            <div className="container mx-auto px-4 xl:px-24 pt-24 pb-36 z-10 relative">
                <div className="md:flex flex-row">
                    <div className="w-full md:w-1/4">
                        <h3 className="text-5xl font-playfair tracking-tight leading-[45px] font-medium text-left mb-5 mr-10 md:mr-0">
                            The landlord who makes
                            <span className="text-cag block italic font-normal">A difference</span>
                        </h3>
                        <div className="w-32 h-32 mt-16">
                            <StaticImage
                                src="../../../images/2-central-gurney/logo.png"
                                width={160}
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt=""
                                objectFit="contain"
                                placeholder="tracedSVG"
                            />
                        </div>
                    </div>
                    <div className="flex-1 md:pl-24 xl:pl-48">
                        <p className="font-light leading-relaxed">
                            CAG, a modern and classy retail space is managed by the landlord of G Hotel which is a leading business hotel in Penang @ Malaysia. With a successful 15-year track record of 5-Star luxury hospitality excellence, G Hotel has to date 2 hotels which are chic, stylish, moderne contemporary namely G Hotel Gurney and G Hotel Kelawai.
                            <br/><br/>
                            Recipients of over 100 awards of both local and international accolades, G Hotel strives and knows that a great landlord-tenant relationship can make all the difference when it comes to growing your business. The professionalism and continued dedication under G Hotel have earned the trust of leading brands and a host of renowned long-term partners of over 10 years such as Miraku and The Coffee Bean & Tea Leaf Malaysia.
                            <br/><br/>
                            As CAG embarks on this new journey, G Hotel too will be transforming into a brand-new hotel bringing the lobby and reception up to the 3rd floor, marking new exciting features that are bound to dazzle and delight.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comapny;
