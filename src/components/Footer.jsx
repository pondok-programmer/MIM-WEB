import brandSidaq from '../assets/imgs/logo-sidaq.png'
import brandIsmuhuyahya from '../assets/imgs/logo-ismuhuyahya.png'
import brandMPP from '../assets/imgs/logo-mpp.png'
import brandPIT from '../assets/imgs/logo-pit.png'
import brandSIB from '../assets/imgs/logo-sib.png'

import { BiLogoFacebookCircle, BiLogoGmail, BiLogoInstagram, BiLogoWhatsapp, BiLogoYoutube, } from 'react-icons/bi'


const Footer = () => {
  return (
    <footer className="flex flex-col justify-end gap-y-3 w-full h-[60vh] bg-gradient-to-t from-[#FAEAB1] from-20% to-[#FFFFFF] to-80% border-2 text-[#AD7B3E]">
      <div>
        <section className="flex items-center">
          <header className='flex-[1] mx-4'><h1 className='text-bold text-[18px]'>Partnership</h1></header>
          <main className="flex flex-[3] h-16 overflow-x-scroll scrollbar-hide">
            <img src={brandSidaq} alt="Logo Sidaq" />
            <img src={brandIsmuhuyahya} alt="Logo IsmuhuYahya" />
            <img src={brandMPP} alt="Logo Masjid Pemuda Peradaban" />
            <img src={brandPIT} alt="Logo Pondok IT" />
            <img src={brandSIB} alt="Logo SIB" />
          </main>
        </section>
      </div>
      <div className='flex flex-col items-center'>
      <section className='text-center'>
        <header>
          <h1>Kantor</h1>
        </header>
        <main>
          <p>Desa Tirtohargo dsn Kalangan, Rt/Rw 01/00, Gegunung, Tirtohargo, Kec. Kretek, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55772</p>
        </main>
      </section>
      <section className='text-center my-5'>
        <header>
        <h1>Hubungi Kami</h1></header>
        <main className='flex gap-5'>
          <span><BiLogoInstagram  className='text-[30px]'/></span>
          <span><BiLogoYoutube  className='text-[30px]'/></span>
          <span><BiLogoFacebookCircle  className='text-[30px]'/></span>
          <span><BiLogoGmail  className='text-[30px]'/></span>
          <span><BiLogoWhatsapp  className='text-[30px]'/></span>
        </main>
      </section>
      </div>
      <span className='text-center font-[600]'>
        &copy; 2023 MIM | All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer