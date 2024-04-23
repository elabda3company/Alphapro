import React from 'react'
import { useLang } from '../../context/DataContext'
import github from '../assets/github.svg'
import rreact from '../assets/rreact.svg'
import vue from '../assets/vue.svg'
import vs from '../assets/vs.svg'
import v from '../assets/v.svg'
import html from '../assets/html.svg'
import angular from '../assets/angular.svg'
import css3 from '../assets/css3.svg'
import js from '../assets/js.svg'
import styles from '../../styles';
import { Link } from 'react-router-dom'
 

function Hero() {
  const {data,language} = useLang();
  const handleClick = () => {
    // Scroll to the top of the page when "View Project" is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className=''>
    <div className={`${styles.marginX} ${styles.marginY} `}>
      <div className='flex lg:flex-row flex-col '>
        <div className='flex-1 flex  items-center mt-[50px] '>
          <div>

        <div className='flex flex-row md:gap-[15px] sm:gap-[10px] gap-[5px] lg:text-[50px] md:text-[6vw] sm:text-[7vw] @screen xs:text-[7.5vw] text-[7vw]'>
          <h1 className='text-white font-bold'>
            {data.home.hero.titleStart}
          </h1>
          <h1 className='textGradient2 font-bold'>
            {data.home.hero.innerTitle}
          </h1>
          <h1 className='text-white font-bold'>
            {data.home.hero.titleMid}
          </h1>
        </div>
          <h1 className='text-white lg:text-[50px] text-[6vw] font-bold '>
            {data.home.hero.titleEnd}
          </h1>
          <p className={`text-[#8F8F8F] mt-[10px] sm:text-[16px] @screen xs:text-[14px] text-[11px] ${language === 'english' ? "lg:mr-[150px]" : "lg:ml-[150px]" } `}>{data.home.hero.desc}</p>
          <Link to="/contact-us" onClick={handleClick}>
          <button className='sm:h-[48px] h-[38px] md:w-[210px] sm:w-[150px] w-[130px] border-[1px] border-solid border-[#A17AF2] text-white md:text-[18px] sm:text-[15px] text-[13px] font-normal md:rounded-[24px] rounded-[20px] bg-[#694FA973] mt-[20px]'>{data.home.hero.btn}</button>
          </Link>
          </div>

        </div>
        <div className='flex-1 flex lg:justify-center justify-center items-center  lg:mt-[50px] mt-[100px] relative  '>
          <div className='sec lg:w-[36vw] sm:w-[55vw] w-[62vw] lg:h-[36vw] sm:h-[55vw] h-[62vw] rounded-full borderGragient md:p-[1.3px] p-[0.9px] relative'>
            <div className='w-full h-full rounded-full bg-[#040015] flex justify-center items-center' >
              <div className='lg:w-[30vw] sm:w-[45vw] w-[50vw] lg:h-[30vw] sm:h-[45vw] h-[50vw] rounded-full borderGragient md:p-[1.3px] p-[0.9px]'>
                <div className='w-full h-full rounded-full bg-[#040015] flex justify-center items-center'>
                  <div className='lg:w-[23vw] sm:w-[35vw] w-[38vw] lg:h-[23vw] sm:h-[35vw] h-[38vw] rounded-full borderGragient md:p-[1.3px] p-[0.9px]'>
                    <div className='w-full h-full rounded-full bg-[#040015] flex justify-center items-center'>
                      <div className='lg:w-[15vw] sm:w-[25vw] w-[26vw] lg:h-[15vw] sm:h-[25vw] h-[26vw] rounded-full borderGragient md:p-[1.3px] p-[0.9px]'>
                        <div className=' w-full h-full rounded-full bg-[#040015] flex justify-center items-center'>
                              <div className='ch lg:w-[6.5vw] sm:w-[10vw] w-[11vw] lg:h-[6.5vw] sm:h-[10vw] h-[11vw] rounded-full borderGragient md:p-[1.3px] p-[0.9px]'>
                              <div className='w-full h-full rounded-full  bg-[#040015] flex justify-center items-center'>   
                                <div className='w-full h-full rounded-full  bg-[#FFFFFF26] flex justify-center items-center'>
                                  <img src={github} alt='github' className='w-[50%]' />
                                </div>
                                </div>
                              </div>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ch absolute top-[0px] right-[20px] lg:w-[7vw] sm:w-[10.8vw] w-[12vw] lg:h-[7vw] sm:h-[10.8vw] h-[12vw] rounded-full borderGragient md:p-[1.3px] p-[0.9px]">
            <div className='w-full h-full rounded-full bg-[#040015] flex justify-center items-center'>          
              <div className='w-full h-full rounded-full bg-[#FFFFFF26] flex justify-center items-center'>
                <img src={rreact} alt='github' className='w-[50%]' />
              </div>
            </div>
            </div>
            <div className='ch absolute top-[-1vw] left-[5.5vw] lg:w-[6.5vw] sm:w-[10vw] w-[11vw] lg:h-[6.5vw] sm:h-[10vw] h-[11vw] rounded-full borderGragient md:p-[1.3px] p-[0.9px]'>
            <div className='w-full h-full rounded-full bg-[#040015] flex justify-center items-center'>          
              <div className='w-full h-full rounded-full bg-[#FFFFFF26] flex justify-center items-center'>
                <img src={vs} alt='github' className='w-[50%]' />
              </div>
            </div>
            </div>
            <div className='ch absolute lg:top-[14vw] top-[22vw] left-[0vw] lg:w-[6vw] sm:w-[9vw] w-[13vw] lg:h-[6vw] sm:h-[9vw] h-[13vw] rounded-full borderGragient md:p-[1.3px] p-[0.9px]'>
            <div className='w-full h-full rounded-full bg-[#040015] flex justify-center items-center'>          
              <div className='w-full h-full rounded-full bg-[#FFFFFF26] flex justify-center items-center'>
                <img src={v} alt='github' className='w-[50%]' />
              </div>
            </div>
            </div>
            <div className='ch absolute lg:top-[5vw] top-[8vw] lg:left-[16vw] left-[24vw] lg:w-[4vw] sm:w-[6.2vw] w-[7vw] lg:h-[4vw] sm:h-[6.2vw] h-[7vw] rounded-full borderGragient md:p-[1.3px] p-[0.9px]'>
            <div className='w-full h-full rounded-full bg-[#040015] flex justify-center items-center'>     
              <div className='w-full h-full rounded-full bg-[#FFFFFF26] flex justify-center items-center'>
                <img src={js} alt='github' className='w-[50%]' />
              </div>
            </div>
            </div>
            <div className='ch absolute lg:bottom-[5.5vw] bottom-[9vw]  lg:left-[13vw] left-[17vw] lg:w-[4vw] sm:w-[6.2vw] w-[7vw] lg:h-[4vw] sm:h-[6.2vw] h-[7vw] rounded-full borderGragient md:p-[1.3px] p-[0.9px]'>
            <div className='w-full h-full rounded-full bg-[#040015] flex justify-center items-center'>          
              <div className='w-full h-full rounded-full bg-[#FFFFFF26] flex justify-center items-center'>
                <img src={css3} alt='github' className='w-[50%]' />
              </div>
            </div>
            </div>
            <div className="ch absolute bottom-[-1vw] left-[6vw] lg:w-[6vw] sm:w-[10.8vw] w-[12vw] lg:h-[6vw] sm:h-[10.8vw] h-[12vw] rounded-full borderGragient md:p-[1.3px] p-[0.9px]">
            <div className='w-full h-full rounded-full bg-[#040015] flex justify-center items-center'>          
              <div className='w-full h-full rounded-full bg-[#FFFFFF26] flex justify-center items-center'>
                <img src={vue} alt='github' className='w-[50%]' />
              </div>
            </div>
            </div>
            <div className='ch absolute bottom-[12vw] right-[0.5vw] lg:w-[7.5vw] sm:w-[11.6vw] w-[13vw] lg:h-[7.5vw] sm:h-[11.6vw] h-[13vw] rounded-full borderGragient md:p-[1.3px] p-[0.9px]'>
            <div className='w-full h-full rounded-full bg-[#040015] flex justify-center items-center'>          
              <div className='w-full h-full rounded-full bg-[#FFFFFF26] flex justify-center items-center'>
                <img src={angular} alt='github' className='w-[50%]' />
              </div>
            </div>
            </div>
            <div className='ch absolute bottom-[-1vw] right-[6vw] lg:w-[6vw] sm:w-[9.3vw] w-[10.3vw] lg:h-[6vw] sm:h-[9.3vw] h-[10.3vw] rounded-full borderGragient md:p-[1.3px] p-[0.9px]'>
            <div className='w-full h-full rounded-full bg-[#040015] flex justify-center items-center'>          
              <div className='w-full h-full rounded-full bg-[#FFFFFF26] flex justify-center items-center'>
                <img src={html} alt='github' className='w-[50%]' />
              </div>
            </div>
            </div>

          </div>
          
        </div>
      </div>
         
    </div>
    </div>
  )
}

export default Hero