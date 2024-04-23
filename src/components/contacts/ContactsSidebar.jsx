import { useState } from "react";
import { useLang } from "../../context/DataContext"
import whats from "../assets/what's.png"
import messenger from "../assets/messenger.png"
import gmail from "../assets/gmail.png"
import logo from "../assets/logo.png"
import headphone from "../assets/headphone.png"
import { Link } from "react-router-dom";

function ContactsSidebar() {
    const {language,data} = useLang();
    const [toggle,setToggle] = useState(false)

  return (
    <div className={`fixed bottom-[10%] ${language === 'english' ? "right-[20px]" : "left-[20px]"} z-[30]`}>
        <div className={`contactsSidebar flex flex-col gap-[10px] items-center justify-center ${toggle === false ? "hidden" : "visible"} `}>
          {/* <Link to='' target="_blank" className="w-[40px] h-[40px] rounded-full p-[2px] flex justify-center items-center bg-[#FFFFFF26] border-[2px] border-[#694FA9D9] border-solid">
              <img src={gmail} className="w-[70%] object-cover" alt="gmail-icon"/>
          </Link> */}
          <Link to='https://m.me/236372902891018' target="_blank" className="w-[40px] h-[40px] rounded-full p-[2px] flex justify-center items-center bg-[#FFFFFF26] border-[2px] border-[#694FA9D9] border-solid">          
              <img src={messenger} className="w-[70%] object-cover" alt="messenger-icon"/>
          </Link>
          <Link to='https://wsend.co/201021555519' target="_blank" className="w-[40px] h-[40px] rounded-full p-[2px] flex justify-center items-center bg-[#FFFFFF26] border-[2px] border-[#694FA9D9] border-solid">
              <img src={whats} className="w-[70%] object-cover" alt="what's-app-icon"/>
          </Link>
        </div>
        <div onClick={() => setToggle((prev) => !prev)} className=" flex flex-col justify-center items-center mt-[10px]">
          <div className="w-[100px] h-[100px] rounded-full p-[3px] flex justify-center items-center relative">
            <img src={headphone} className="w-[80%] image-animation"/>
            <img src={logo} className="w-[38%] absolute bottom-[7px] object-cover" />
          </div>
          <p className="text-white text-[12px]">{data.contacts}</p>
        </div>
    </div>
  )
}

export default ContactsSidebar