 
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png'
import logoName from '../assets/logo-name.svg'
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'
import { useLang } from '../../context/DataContext';
import { useState } from "react";


function Navbar() {
  const {data,language,handleChangeLanguage} = useLang();
  const location = useLocation();
  const handleChange = (event) => {
    handleChangeLanguage(event.target.value);
  };
  const [active , setActive] = useState()
  const [toggle, setToggle] = useState(false)

  const handleNavClick = (i) => {
    // Scroll to the top of the page when "Nav Link" is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActive(i);
  };

  const handleSideNavClick = (i) => {
    // Scroll to the top of the page when "Nav Link" is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActive(i);
    setToggle((prev) => !prev);
  };

  return (
    <navbar className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md   z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          to='/'
          className="h-auto w-auto flex flex-row items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
        <div className='flex flex-row @screen xs:gap-[10px] gap-[6px]'>
           <img className='@screen md:w-[35px] sm:w-[27px] xs:w-[35px] w-[27px]' src={logo} alt='logo'/>
           <img className='@screen md:w-[110px] sm:e-[95px] xs:w-[110px] w-[95px] ' src={logoName} alt='logo'/>
        </div>
        </Link>
        <div className="lg:w-[70vw] w-[60vw] sm:flex hidden h-full  flex-row items-center justify-between   ">
          <div className={`flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e]  px-[20px] py-[10px] rounded-full md:text-[16px] text-[10px] text-gray-200 ${language == 'arabic' ? "lg:ml-[15vw]" : "lg:mr-[15vw]" } `}>
          <Link to="/" onClick={() => handleNavClick(data.navbar.i1)} className={`text-white hover:text-gray-300 `}>
            {data.navbar.i1.title}
            <div className={`${location.pathname === data.navbar.i1.slug ? "underLine  " : "" }`}></div>
            {console.log(location.pathname)}
          </Link>   
          <Link to="/about-us" onClick={() => handleNavClick(data.navbar.i2)} className={`text-white hover:text-gray-300 `}>
            {data.navbar.i2.title}
            <div className={`${location.pathname === data.navbar.i2.slug ? "underLine  " : "" }`}></div>
            {console.log(location.pathname)}
          </Link>
          <Link to="/services" onClick={() => handleNavClick(data.navbar.i3)} className={`text-white hover:text-gray-300 `}>
            {data.navbar.i3.title}
            <div className={`${location.pathname === data.navbar.i3.slug ? "underLine " : "" }`}></div>
            {console.log(location.pathname)}
          </Link>
          <Link to="/projects" onClick={() => handleNavClick(data.navbar.i4)} className={`text-white hover:text-gray-300  `}>
            {data.navbar.i4.title} 
            <div className={`${location.pathname === data.navbar.i4.slug ? "underLine  " : "" }`}></div> 
            {console.log(location.pathname)}
          </Link>
          <Link to="/blog" onClick={() => handleNavClick(data.navbar.i5)} className={`text-white hover:text-gray-300  `}>
            {data.navbar.i5.title}  
            <div className={`${location.pathname === data.navbar.i5.slug ? "underLine  " : "" }`}></div>
            {console.log(location.pathname)}
          </Link>
          <Link to="/contact-us" onClick={() => handleNavClick(data.navbar.i6)} className={`text-white hover:text-gray-300  `}>
            {data.navbar.i6.title}  
            <div className={`${location.pathname === data.navbar.i6.slug ? "underLine" : "" }`}></div>
            {console.log(location.pathname)}
          </Link>
          
          <div className=' text-white'>
          <div>
            <label htmlFor="language-select" className='bg-white'></label>
            <select id="language-select" value={language} onChange={handleChange} className='bg-transparent'>
            <option className="bg-black" value="english">En</option>
            <option className="bg-black" value="arabic">ar</option>
            </select>
          </div>
          </div>
         </div>
        </div>
        <div className='sm:hidden flex flex-1 justify-end items-center   '>
            <img src={toggle ? close : menu} alt='menuLogo'
              className='cursor-pointer w-[28px] h-[28px] object-contain' 
              onClick={() => setToggle((prev) => !prev)}
            />
             
            <div className={`${!toggle ? "hidden" : "flex"}   bg-[#040015]  absolute top-20 ${language === 'english' ? "right-0" : "left-0"} mx-4 my-2 min-w-[200px] rounded-xl sidebar z-[10] `}>
              <div className="black-gradient w-full h-full p-6">

              <div className="flex flex-col gap-10">
            <Link to="/" onClick={() => handleSideNavClick(data.navbar.i1)} className={`text-center text-white hover:text-gray-300 `}>
            {data.navbar.i1.title}
            {/* <div className={`  ${active === data.navbar.i1 ? "underLine " : "" }`}></div> */}
          </Link>   
          <Link to="/about-us" onClick={() => handleSideNavClick(data.navbar.i2)} className={`text-center text-white hover:text-gray-300 `}>
            {data.navbar.i2.title}
            {/* <div className={`${active === data.navbar.i2 ? "underLine" : "" }`}></div> */}
          </Link>
          <Link to="/services" onClick={() => handleSideNavClick(data.navbar.i3)} className={`text-center text-white hover:text-gray-300 `}>
            {data.navbar.i3.title}
            {/* <div className={`  ${active === data.navbar.i3 ? "underLine" : "" }`}></div> */}
          </Link>
          <Link to="/projects" onClick={() => handleSideNavClick(data.navbar.i4)} className={`text-center text-white hover:text-gray-300  `}>
            {data.navbar.i4.title} 
            {/* <div className={`  ${active === data.navbar.i4 ? "underLine" : "" }`}></div>  */}
          </Link>
          <Link to="/blog" onClick={() => handleSideNavClick(data.navbar.i5)} className={`text-center text-white hover:text-gray-300  `}>
            {data.navbar.i5.title}  
            {/* <div className={` ${active === data.navbar.i5 ? "underLine" : "" }`}></div> */}
          </Link>
          <Link to="/contact-us" onClick={() => handleSideNavClick(data.navbar.i6)} className={`text-center text-white hover:text-gray-300  `}>
            {data.navbar.i6.title}  
            {/* <div className={`${active === data.navbar.i6 ? "underLine" : "" }`}></div> */}
          </Link>
          
          <div className=' text-white'>
          <div>
            <label htmlFor="language-select" className='bg-white'></label>
            <select id="language-select" value={language} onChange={handleChange} className='bg-transparent'>
            <option className="bg-black" value="english">En</option>
            <option className="bg-black" value="arabic">ar</option>
            </select>
          </div>
          </div>

              </div>
              </div>
            </div>
         </div>
         
      </div>
    </navbar>
  )
}

export default Navbar