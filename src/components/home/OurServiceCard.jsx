import { Link } from "react-router-dom"


function OurServiceCard({content,title,img,slug,index}) {
  const handleSeviceClick = () => {
    // Scroll to the top of the page when "View Project" is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  //to={`/projects/${slug}`}
  return (
    <Link  onClick={handleSeviceClick}>
    <div className='flex-1 p-[14px]  h-[379px] rounded-[100px] border-[1px] border-[#694FA9D4] border-solid bg-[#FFFFFF24] flex justify-center items-center shadow-lg shadow-[#2A0E61]/50  backdrop-blur-md '>
        <div className='flex flex-col relative gap-[10px] text-white items-center '> 
            <div className='w-[130px] h-[130px] rounded-[124px] bg-[#694FA94A] border-[1px] border-[#694FA9D4] border-solid flex justify-center items-center'>
                <img src={img} alt='social' />
            </div>
            <h4 className="font-bold text-[18px]">{title}</h4>
            <p className="text-[14px] text-[#BDBDBD]">{content}</p>
        <div className={`miniLight absolute w-full top-0`}></div>
        </div>
    </div>
    </Link>
  )
}

export default OurServiceCard