import styles from "../../styles"
import aboutImg from "../assets/aboutImgCom.png"
import { useLang } from "../../context/DataContext"
import { Link } from "react-router-dom";
 

function AboutHome() {
    const {data,language} = useLang();
    const handleClick = () => {
        // Scroll to the top of the page when "View Project" is clicked
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

  return (
    <div className={`flex lg:flex-row flex-col justify-center items-center  ${styles.marginX}`}>
        <div className={`flex-1 lg:mb-0 mb-[60px] ${language === 'english' ? "pr-[50px] " : "pl-[100px]"} `}>
            <img src={aboutImg} className={`w-full ${language === 'english' ? "lg:ml-0 ml-[9%] " : "lg:ml-0 mr-[18%] "}  @screen  xs:h-full h-[70vw]`} />
        </div>
        <div className="flex-1 ">
            <div className="">
                <h2 className="@screen xs:text-[40px] text-[35px] w-[170px] font-bold textGradient2">{data.home.about.title}</h2>
                <p className="@screen xl:text-[20px] lg:text-[16px] sm:text-[20px] xs:text-[16px] text-[14px] font-medium xl:leading-[35px] lg:leading-[27px] sm:leading-[35px] xs:leading-[27px] text-white mt-[32px] mb-[48px]">{data.home.about.content}</p>
                <Link to=" " onClick={handleClick}>
                  <button className="btn">{data.home.about.btn}</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default AboutHome