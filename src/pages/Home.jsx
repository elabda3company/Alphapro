import React from 'react'
import video from '/public_blackhole.webm'
import Hero from '../components/home/Hero'
import OurServices from '../components/home/ourServices'
import AboutHome from '../components/home/AboutHome'
import WhyAlpha from '../components/home/WhyAlpha'
 

function Home() {
  return (
    <div>
        <div className="relative flex flex-col h-full w-full">
           <video
            className="w-full lg:h-[870px] md:h-[100vw] h-[700px] rotate-180 absolute top-[-370px] left-0 z-[0] "
            autoPlay
            loop
            muted
            playsInline 
            >
             <source src={video} type="video/mp4" />
          </video>
          <div className='z-[2]'>
             <Hero />
             <OurServices />
             <AboutHome />
             <WhyAlpha />
          </div>
        </div>
     </div>
  )
}

export default Home