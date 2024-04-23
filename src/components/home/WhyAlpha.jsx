import { useLang } from "../../context/DataContext"
import WhyCard from "./WhyCard";
import styles from "../../styles";

function WhyAlpha() {
  const {data,language} = useLang();
  
  return (
    <div className={`lg:mx-[100px] md:mx-[60px] mx-[15vw] ${styles.marginY} relative`}>
      <h2 className="sm:text-[40px] text-[28px] font-bold textGradient2 m-auto mb-[48px] leading-[46px] sm:w-[300px]">{data.home.whyAlpha.title}</h2>
    <div >
      <div className="container mx-auto mt-8">
      <div className="grid md:grid-cols-2 grid-cols-1 xl:mx-[10vw]  xl:gap-[10vw] lg:mx-[6vw]  lg:gap-[6vw] md:mx-[3vw]  md:gap-[3vw] gap-[25px]">
        {data.home.whyAlpha.cards.slice(0, 2).map((data, index) => (
          <WhyCard key={index} title={data.title} content={data.content} />
        ))}
      </div>
      <div className="grid grid-cols-1 my-[25px] mb-4 md:w-[450px] m-auto">
        {data.home.whyAlpha.cards.slice(2,3).map((data, index) => (
          <WhyCard key={index} title={data.title} content={data.content} />
        ))}
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 xl:mx-[10vw]  xl:gap-[10vw] lg:mx-[6vw]  lg:gap-[6vw] md:mx-[3vw]  md:gap-[3vw] gap-[25px]">
        {data.home.whyAlpha.cards.slice(3, 5).map((data, index) => (
          <WhyCard key={index} title={data.title} content={data.content} />
        ))}
      </div>
       
    </div>
    </div>
    
    <div className={`light1  absolute ${language === 'english' ? "left-[-40px] " : "right-[-40px] "} bottom-[-300px]`}>

    </div> 
    <div className={`light2   absolute ${language === 'english' ? "left-[-40px] " : "right-[-40px] "} bottom-[100px]`}>

    </div> 
    <div className={`light3   absolute ${language === 'english' ? "left-[-40px] " : "right-[-40px]"} bottom-[-100px]`}>

    </div> 

    <div className={`light1 absolute ${language === 'english' ? "right-[-40px] " : "left-[-40px] "} top-[-600px]`}>

    </div> 
    <div className={`light2 absolute ${language === 'english' ? "right-[-40px] " : "left-[-40px] "} top-[-200px]`}>

    </div> 
    <div className={`light3 absolute ${language === 'english' ? "right-[-40px] " : "left-[-40px] "} top-[-400px]`}>

    </div> 
    </div>
  )
}

export default WhyAlpha