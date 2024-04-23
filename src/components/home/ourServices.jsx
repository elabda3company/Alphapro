import { useLang } from "../../context/DataContext"
import styles from "../../styles";
import OurServiceCard from "./OurServiceCard";

function OurServices() {
    const {data,language} = useLang();
    const cards = data.home.services.cards;
    

  return (
    <div className={`${styles.marginY} relative`} >
        <div className="text-center flex flex-col items-center">
            <h2 className="@screen xs:text-[40px] text-[34px] font-bold textGradient2 leading-[46px] sm:w-[400px]">{data.home.services.title}</h2>
            <p className="@screen xs:text-[18px] text-[16px] font-medium leading-[21px] text-[#D9D9D9] mt-[16px] w-[70vw]">{data.home.services.desc}</p>
            <div className={`mt-[60px] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[26px]  lg:mx-[6.5vw] md:mx-[10vw] sm:mx-[15vw] mx-[23vw] `}>
              {cards.map((card,index) => (
                <OurServiceCard key={card.id} img={card.img} title={card.title} content={card.content} slug={card.slug} index={index} />
              ))}
            </div>
        </div>
        <div className={`light1  absolute ${language === 'english' ? "left-[-40px] " : "right-[0px] "} bottom-[-200px]`}>

        </div> 
        <div className={`light2   absolute ${language === 'english' ? "left-[-40px] " : "right-[0px] "} bottom-[200px]`}>

        </div> 
        <div className={`light3   absolute ${language === 'english' ? "left-[-40px] " : "right-[0px]"} bottom-[0px]`}>

        </div> 
    </div>
  )
}

export default OurServices