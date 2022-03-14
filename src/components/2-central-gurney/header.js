import React, { useState } from "react"
import { Link } from "gatsby"
import useScrollPercentage from "../../hooks/useScrollPercentage"
import { StaticImage } from "gatsby-plugin-image"

const CollapseMenu = () => {
  const scrollPercentage = useScrollPercentage()
  const [openMenu, setOpenMenu] = useState(false)

  const onLinkClick = (toTop) =>{
    setOpenMenu(false)
    toTop && window.scroll({ top: 0 })
  }
  
  return(
    <>
       <div className={`${openMenu ? "opacity-100 md:translate-y-5 visible" : scrollPercentage > 6 ? "opacity-100 lg:translate-y-5":"lg:invisible lg:opacity-0 lg:-translate-y-5"} transform fixed top-0 left-0 right-0 w-full transition-basic z-[60]`}>
        <button 
          onClick={()=> setOpenMenu((prev)=>!prev)}
          className={`${openMenu ? "border-gray-200":"border-transparent"} mt-5 md:mt-0 group border p-2 bg-white bg-opacity-[0.88] bg-opac backdrop-blur-lg mx-auto rounded-full flex flex-row justify-center items-center transition-basic`}
        >
          <div className="border-r border-gray-200 pl-1 pr-2 relative">
            <div className={`${openMenu ? "":"group-hover:gap-1.5 group-hover:-translate-y-2"} gap-2 w-10 h-10 flex flex-col justify-center items-center transition-basic`}>
              <div className={`transition-basic transform ${openMenu ? 'rotate-45 translate-y-1':''} bg-gray-500 w-2/4 h-[1.5px]`}></div>
              <div className={`transition-basic transform ${openMenu ? '-rotate-45 -translate-y-1.5':''} bg-gray-500 w-2/4 h-[1.5px]`}></div>
            </div>
            <p className={`${openMenu ? '':'group-hover:opacity-100'} opacity-0  bg-opacity-95 absolute bottom-0 left-2 rounded-full text-gray-500 text-[10px] uppercase tracking-widest text-gray-450 font-normal transition-basic`}>Menu</p>
          </div>
          
          <div className="w-24 h-12 rounded-full mr-1 p-3 flex items-center justify-center">
            <StaticImage
              src="../../images/2-central-gurney/logo.png"
              width={160}
              quality={45}
              formats={["auto", "webp", "avif"]}
              alt=""
              objectFit="contain"
              placeholder="none"
            />
          </div>
        </button>
      </div>

      <div className={`${openMenu ? '':' top-full'} bg-opacity-95 backdrop-blur-lg overflow-hidden fixed top-0 bottom-0 left-0 right-0 bg-white w-full h-full z-50 transform transition-all duration-700 ease-in-out`}>
        <div className="w-full h-full md:p-36 p-6">
          <ul className="flex flex-col items-center justify-center h-full gap-6 text-center">
            <li><Link onClick={()=>onLinkClick(true)} to="#" className="text-3xl md:text-[40px] font-playfair hover:text-[#E3965A] transition-basic">Home</Link></li>
            <li><Link onClick={onLinkClick} to="#about" className="text-3xl md:text-[40px] font-playfair hover:text-[#E3965A] transition-basic">About</Link></li>
            <li><Link onClick={onLinkClick} to="#location" className="text-3xl md:text-[40px] font-playfair hover:text-[#E3965A] transition-basic">Location</Link></li>
            <li><Link onClick={onLinkClick} to="#plan" className="text-3xl md:text-[40px] font-playfair hover:text-[#E3965A] transition-basic">Layout Plan</Link></li>
            <li><Link onClick={onLinkClick} to="#company" className="text-3xl md:text-[40px] font-playfair hover:text-[#E3965A] transition-basic">Our Company</Link></li>
            <li><Link onClick={onLinkClick} to="#contact" className="text-3xl md:text-[40px] font-playfair hover:text-[#E3965A] transition-basic">Leasing Enquiry</Link></li>
          </ul>
        </div>
        <div className="absolute -bottom-[700px] right-0 left-0">
            <div className="border-2 border-cag rounded-full w-72 h-72 xl:w-[800px] xl:h-[800px] mx-auto"></div>
        </div>
      </div>
    </>
  )
}

const Header = () => {

  return(
    <header>
        <CollapseMenu/>
        <div className="container mx-auto px-4 xl:px-24 py-3 hidden lg:block">
          <ul className="md:flex flex-row items-center justify-center gap-10 flex-wrap">

            <li className="flex-1 flex flex-row gap-10">
              <Link to="#about" className="font-light text-[15px] tracking-wide hover:opacity-75 transition-basic">About</Link>
              <Link to="#location" className="font-light text-[15px] tracking-wide hover:opacity-75 transition-basic">Location</Link>
              <Link to="#plan" className="font-light text-[15px] tracking-wide hover:opacity-75 transition-basic">Layout Plan</Link>
            </li>
            
            <li className="flex-1 flex justify-center items-center">
              <Link to="#">
                <div className="p-3 m-auto">
                  <div className="w-36 bg-white">
                    <StaticImage
                      src="../../images/2-central-gurney/logo.png"
                      layout="fullWidth"
                      quality={45}
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      objectFit="contain"
                      placeholder="none"
                    />
                  </div>
                </div>
              </Link>
            </li>

            <li className="flex-1 flex flex-row justify-end gap-10">
              <Link to="#company" className="font-light text-[15px] tracking-wide hover:opacity-75 transition-basic">Company</Link>
              <Link to="#contact" className="font-light text-[15px] tracking-wide hover:opacity-75 transition-basic text-cag underline">Leasing Enquiry</Link>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Header
