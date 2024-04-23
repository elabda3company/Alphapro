import { useLang } from "../../context/DataContext";
import footerLogo from '../assets/logo.png'
import logoName from '../assets/logo-name.svg'
import { Link } from "react-router-dom";

function Footer() {
  const {data,language} = useLang();
  const enFooter = "%3Csvg%20width%3D%221440%22%20height%3D%22543%22%20viewBox%3D%220%200%201440%20543%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M145.872%2024.7562C157.233%205.8948%20179.595%20-3.31473%20200.944%202.07576L1440%20314.937V543H0V266.937L145.872%2024.7562Z%22%20fill%3D%22white%22%20fill-opacity%3D%220.17%22%2F%3E%0A%3Cpath%20d%3D%22M146.729%2025.2721C157.862%206.78799%20179.777%20-2.23735%20200.699%203.04533L1439%20315.715V542H1V267.215L146.729%2025.2721Z%22%20stroke%3D%22%23A17AF2%22%20stroke-opacity%3D%220.79%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E";
  const arFooter = "%3Csvg%20width%3D%22%22%20height%3D%22%22%20viewBox%3D%220%200%201440%20543%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%20314.585L1217.85%201.64681C1238.08%20-3.5518%201259.41%204.37411%201271.34%2021.5221L1440%20263.993V543H0V314.585Z%22%20fill%3D%22white%22%20fill-opacity%3D%220.17%22%2F%3E%0A%3Cpath%20d%3D%22M0.5%20542.5V314.972L1217.97%202.13108C1238%20-3.01554%201259.12%204.8311%201270.93%2021.8076L1439.5%20264.15V542.5H0.5Z%22%20stroke%3D%22%23A17AF2%22%20stroke-opacity%3D%220.69%22%2F%3E%0A%3C%2Fsvg%3E%0A";

  const handleFooterClick = () => {
    // Scroll to the top of the page when "View Project" is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className=''>

    <footer className=" xl:px-[120px] md:px-[5vw] px-[50px] py-[15px] pt-[50px] "
   
    style={{
      backgroundImage: `url("data:image/svg+xml,${language === 'english' ? enFooter : arFooter}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
   
         <div className={`flex flex-col @screen xs:gap-[50px] gap-[30px] ${language === 'english' ? "" : "xl:mr-[1vw]"}`}>
          <div className="flex flex-col lg:mt-0 md:mt-[100px] sm:mt-[200px] mt-[250px] gap-[10px]">
            <img src={footerLogo} alt="logo" className="@screen xs:w-[80px] w-[60px]" />
            <img src={logoName} alt="alpha" className="@screen xs:w-[200px] w-[160px]" />
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  '>
            <div className='flex flex-col lg:mt-0 mt-[30px] md:self-start'>
              <Link to="/services" onClick={handleFooterClick} className="mb-[18px] font-bold text-[20px] text-white">{data.footer.services.title}</Link>
              <div>
                {data.footer.services.items.map((item) => (
                  <p className="text-[#BDBDBD] text-[16px] mb-[16px] font-normal" key={item.id}>{item.title}</p>
                ))}
              </div>
            </div>
            <div className='flex  flex-col lg:mt-0 mt-[30px] md:self-center'>
              <Link to="/contact-us" onClick={handleFooterClick} className="mb-[18px] font-bold text-[20px] text-white">{data.footer.contact.title}</Link>
              <div className="flex flex-row mb-[8px] @screen xs:text-[16px] text-[13px]">
                <h4 className="text-[#BDBDBD]   font-normal">{data.footer.contact.addressTitle}:</h4>
                <p className="text-[#BDBDBD]   font-normal mx-[5px]">{data.footer.contact.address}</p>
              </div>
              <div className="flex flex-row mb-[8px] @screen xs:text-[16px] text-[13px]">
                <h4 className="text-[#BDBDBD] font-normal">{data.footer.contact.phoneTitle}:</h4>
                <p className="text-[#BDBDBD] font-normal mx-[5px]">{data.footer.contact.phone}</p>
              </div>
              <div className="flex flex-row mb-[8px] @screen xs:text-[16px] text-[13px]">
                <h4 className="text-[#BDBDBD]  font-normal">{data.footer.contact.emailTitle}:</h4>
                <p className="text-[#BDBDBD]  font-normal mx-[5px]">{data.footer.contact.email}</p>
              </div>
            </div>
            <div className='flex  flex-col lg:mt-0 mt-[30px] md:self-end'>
              <h3 className="mb-[18px] font-bold text-[20px] text-white">{data.footer.follow.title}</h3>
              <div className="flex flex-row gap-[10px] md:items-center">
                {data.footer.follow.icons.map((icon) => (
                  <Link key={icon.id} target="_blank" to={icon.link} className=""><img className=""  src={icon.icon} alt={icon.altText}  /></Link>
                ))}
              </div>
            </div>
          </div>
          <p className="text-white @screen xs:text-[14px] text-[10px] font-normal text-center " dir="ltr">@ 2023 Alpha pro . All rights reserved.</p>
         </div>
     
    </footer>
    </div>
  )
}

export default Footer
 
