import { useEffect, useState } from 'react'
import feature1 from '../assets/imgs/SVG1.svg'
import feature2 from '../assets/imgs/SVG2.svg'
import feature3 from '../assets/imgs/SVG3.svg'
import { useSteteContext } from '../context/StateContext'
import { ButtonCustom } from './ui'
import { LuArrowBigDownDash } from 'react-icons/lu'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules' 
import 'swiper/css';
import 'swiper/css/autoplay'

const Feature2 = () => {

  const dataFeatures = [{
    title: 'Bacaan Sholat',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus beatae officia perspiciatis nemo, at quas dolorem adipisci labore exercitationem?',
    img: feature1,
    id: 1
  },{
    title: 'Al Quran',
    description: 'Adalah Membaca Ayat - ayat Quran',
    img: feature2,
    id: 2
  },{
    title: 'Bacaan Sholat',
    description: 'Adalah MIM Membaca Ayat - ayat yang ada pada sholat',
    img: feature3,
    id: 3
  },{
    title: 'Bacaan Sholat',
    description: 'Adalah MIM Membaca Ayat - ayat yang ada pada sholat',
    img: feature3,
    id: 4
  },{
    title: 'Bacaan Sholat',
    description: 'Adalah MIM Membaca Ayat - ayat yang ada pada sholat',
    img: feature3,
    id: 5
  },{
    title: 'Bacaan Sholat',
    description: 'Adalah MIM Membaca Ayat - ayat yang ada pada sholat',
    img: feature3,
    id: 6
  },{
    title: 'Bacaan Sholat',
    description: 'Adalah MIM Membaca Ayat - ayat yang ada pada sholat',
    img: feature3,
    id: 7
  },{
    title: 'Bacaan Sholat',
    description: 'Adalah MIM Membaca Ayat - ayat yang ada pada sholat',
    img: feature3,
    id: 8
  }]
const [currSlide, setCurrSlide] = useState(1)
const {screenView,fitur2} = useSteteContext()

  return (
    <section ref={fitur2} className='my-10 lg:mt-3 lg:mb-10 overflow-hidden'>
      <header className='w-full h-10 md:h-20 pt-1 pr-4 lg:px-40 flex justify-center gap-x-11 md:gap-x-14'>
        <h2 className='text-[22px] md:text-[30px] w-fit order-2 text-[#E5BA73] cursor-pointer' onClick={()=>fitur2.current?.scrollIntoView({behavior: 'smooth'})}>Fitur Lainnya</h2>
        <ButtonCustom className={'animate-bounce w-[20px]'} value={<LuArrowBigDownDash className='text-[40px] md:text-[50px] text-[#E5BA73]'/>} eventOnClick={()=>fitur2.current?.scrollIntoView({behavior: 'smooth'})}/>
      </header>
      <section>

      <Swiper
      modules={[Autoplay]}
      spaceBetween={90}
      slidesPerView={screenView == 'mobile' ? 1 : screenView == 'tablet' ? 2 : screenView == 'desktop' && 3}
      onSlideChange={() => console.log('slide change')}
      centeredSlides={true}
      loop={true}
      autoplay={{delay: 800}}
      speed={1100}
    >
        {dataFeatures.map((data,idx) => (
          <SwiperSlide key={idx}>
              <div className='relative mt-10 items-center w-[280px] ml-[17vw] md:ml-[7vw] lg:ml-[4vw] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.6)] pb-5'>
                <img src={data.img} className='w-full h-[75vh]'/>
                <span className='absolute bottom-5 rounded-2xl flex w-full justify-center items-center bg-slate-300/60 flex-col'>
                <h2 className='text-[15px] self-start my-3 border-b-2'>{data.title}</h2>
                <p className='text-[13px] p-2'>{data.description}</p></span>
              </div>
          </SwiperSlide>
        ))}
    </Swiper>

    </section>
    <div className='w-full -mt-20 md:-mt-40 lg:-mt-80 -z-10'>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="48%" y1="0%" x2="52%" y2="100%"><stop offset="5%" stopColor="#faeab1"></stop><stop offset="95%" stopColor="#c58940"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 84.70813397129191,322.8421052631579 169.41626794258383,345.6842105263158 262,376 C 354.58373205741617,406.3157894736842 455.0430622009568,444.10526315789474 547,393 C 638.9569377990432,341.89473684210526 722.4114832535886,201.89473684210523 815,204 C 907.5885167464114,206.10526315789477 1009.311004784689,350.3157894736842 1115,390 C 1220.688995215311,429.6842105263158 1330.3444976076555,364.8421052631579 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>

    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="48%" y1="0%" x2="52%" y2="100%"><stop offset="5%" stopColor="#faeab1"></stop><stop offset="95%" stopColor="#c58940"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 131.28571428571428,318.75 262.57142857142856,337.5 379,308 C 495.42857142857144,278.5 597,200.75 715,219 C 833,237.25 967.4285714285716,351.5 1091,381 C 1214.5714285714284,410.5 1327.2857142857142,355.25 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path></svg>
    </div>
    </section>
  )
}

export default Feature2                                             

