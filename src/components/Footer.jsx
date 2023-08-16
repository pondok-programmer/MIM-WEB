import brandSidaq from '../assets/imgs/logo-sidaq.png'
import brandIsmuhuyahya from '../assets/imgs/logo-ismuhuyahya.png'
import brandMPP from '../assets/imgs/logo-mpp.png'
import brandPIT from '../assets/imgs/logo-pit.png'
import brandSIB from '../assets/imgs/logo-sib.png'

import { BiLogoFacebookCircle, BiLogoGmail, BiLogoInstagram, BiLogoWhatsapp, BiLogoYoutube, } from 'react-icons/bi'


const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-end gap-y-3 md:gap-10 lg:gap-0 w-full h-[55vh] bg-gradient-to-t from-[#FAEAB1] from-30% to-[#FFFFFF] to-80% text-[#AD7B3E] md:relative md:justify-center">
      <div className='md-flex-[1] lg:flex-[2] md:w-fit md:h-fit md:mb-20 md:self-end'>
        <section className="flex items-center md:flex-col lg:flex-row md:w-fit md:h-[30vh] lg:pl-10">
          <header className='flex-[1] mx-4 lg:-mt-20'><h1 className='text-bold text-[18px] md:text-[24px]'>Partnership</h1></header>
          <main className="flex flex-[3] lg:flex-row lg:h-[210px] lg:mt-20 lg:-ml-40 md:flex-wrap h-16 md:w-[300px] lg:w-[450px] overflow-x-scroll md:overflow-y-scroll scrollbar-hide">
            <img src={brandSidaq} alt="Logo Sidaq" className='md:w-[170px] md:h-[60px] md:mx-16 lg:mx-60 lg:mb-1'/>
            <img src={brandIsmuhuyahya} alt="Logo IsmuhuYahya" className='md:w-[90px] md:h-[90px] md:ml-14 lg:-ml-5' />
            <img src={brandMPP} alt="Logo Masjid Pemuda Peradaban" className='md:w-[90px] md:h-[90px]' />
            <img src={brandPIT} alt="Logo Pondok IT" className='md:w-[120px] md:h-[80px] md:ml-7 lg:ml-0' />
            <img src={brandSIB} alt="Logo SIB" className='md:w-[120px] md:h-[80px]' />
          </main>
        </section>
      </div>
      <div className='flex flex-col lg:flex-row md:self-center md:gap-3 lg:gap-20 items-center md:flex-[3] md:mt-20 md:mr-10'>
      <section className='text-center'>
        <header className='md:mb-10'>
          <h1 className='md:text-[24px] '>Kantor</h1>
        </header>
        <main className='md:text-[19px]'>
          <p>Desa Tirtohargo dsn Kalangan, Rt/Rw 01/00, Gegunung, Tirtohargo, Kec. Kretek, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55772</p>
        </main>
      </section>
      <section className='text-center mt-4 mb-4'>
        <header>
        <h1 className='md:text-[24px] '>Hubungi Kami</h1></header>
        <main className='flex gap-5 md:gap-x-7 lg:flex-wrap mt-4 md:w-[200px] md:justify-center'>
          <span><BiLogoInstagram  className='text-[30px] md:text-[39px]'/></span>
          <span><BiLogoYoutube  className='text-[30px] md:text-[39px]'/></span>
          <span><BiLogoFacebookCircle  className='text-[30px] md:text-[39px]'/></span>
          <span><BiLogoGmail  className='text-[30px] md:text-[39px]'/></span>
          <span><BiLogoWhatsapp  className='text-[30px] md:text-[39px]'/></span>
        </main>
      </section>
      </div>
      <span className='text-center text-[18px] md:text-[20px] font-[600] mb-5 md:absolute md:bottom-0'>
        <hr className='mx-auto w-80 lg:w-[60vw] mb-5 bg-[#AD7B3E]' />
        &copy; 2023 MIM | All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer