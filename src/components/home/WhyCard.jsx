import React from 'react'

function WhyCard({title,content}) {
  return (
    <div> 
        <div className="bg-[#FFFFFF24] border-[1px] border-[#694FA9D4] border-solid  m-auto rounded-lg shadoww p-[25px]">
      <h2 className="text-white text-[20px] font-extrabold mb-2">{title}</h2>
      <p className='text-[#BDBDBD] font-normal'>{content}</p>
    </div>
    </div>
  )
}
export default WhyCard