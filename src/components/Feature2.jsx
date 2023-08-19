import { useEffect, useState } from 'react'
import feature1 from '../assets/imgs/SVG1.svg'
import feature2 from '../assets/imgs/SVG2.svg'
import feature3 from '../assets/imgs/SVG3.svg'
import { useSteteContext } from '../context/StateContext'
import { ButtonCustom } from './ui'
import { LuArrowBigDownDash } from 'react-icons/lu'


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
const {fitur2} = useSteteContext()

useEffect(() => {
  const autoSlide = setInterval(() => {
    setCurrSlide(currSlide => (currSlide + 1) % dataFeatures.length)
  }, 3000);

  return () => {
    clearInterval(autoSlide)
  }
}, [currSlide])


const slider = () => 
{
  if(currSlide == 2) {
    return 'translate-x-[-150px]'
  } else if (currSlide == 3) {
    return 'translate-x-[-370px]'
  } else if (currSlide == 4) {
    return 'translate-x-[-590px]'
  } else if (currSlide == 5) {
    return 'translate-x-[-870px]'
  } else if (currSlide == 6) {
    return 'translate-x-[-1200px]'
  } else if (currSlide == 7) {
    return 'translate-x-[-1350px]'
  } else if (currSlide == 8) {
    return 'translate-x-[-1500px]'
  } else {
    return 'translate-x-[60px]'
  }
}

  return (
    <section ref={fitur2} className='my-10 lg:mt-3 lg:mb-10 overflow-hidden'>
      <header className='w-full h-10 md:h-20 pt-1 pr-4 lg:px-40 flex justify-center gap-x-10'>
        <h2 className='text-[22px] md:text-[30px] w-fit order-2 text-[#E5BA73] cursor-pointer' onClick={()=>fitur2.current?.scrollIntoView({behavior: 'smooth'})}>Fitur Lainnya</h2>
        <ButtonCustom className={'animate-bounce w-[3vw]'} value={<LuArrowBigDownDash className='text-[40px] lg:text-[50px] text-[#E5BA73]'/>} eventOnClick={()=>fitur2.current?.scrollIntoView({behavior: 'smooth'})}/>
      </header>
      <section className={`w-fit h-[80vh] transition-all duration-700 ease-in-out flex flex-row justify-center items-center ${slider()}`}>
    {dataFeatures.map( data => (
      data.id == currSlide ? (<div key={data.id} className='relative flex items-center w-fit h-full transition-300 mx-10'>
      <img src={data.img} className='w-[260px] h-[80vh]'/>
      <span className='absolute bottom-0 rounded-2xl flex w-full h-fit justify-center items-center bg-slate-300/60 flex-col'>
      <h2 className='text-[15px] self-start my-3 border-b-2'>{data.title}</h2>
      <p className='text-[13px] p-2'>{data.description}</p></span>
      </div>) : (<div key={data.id} className='relative w-[200px] h-[70vh] mx-1 transition-300'>
      <img src={data.img} className='w-[200px] h-[70vh]'/>
      </div>)
    ))}
      
    </section>
    <div className='w-full -mt-20 lg:-mt-80 -z-10'>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="48%" y1="0%" x2="52%" y2="100%"><stop offset="5%" stopColor="#faeab1"></stop><stop offset="95%" stopColor="#c58940"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 84.70813397129191,322.8421052631579 169.41626794258383,345.6842105263158 262,376 C 354.58373205741617,406.3157894736842 455.0430622009568,444.10526315789474 547,393 C 638.9569377990432,341.89473684210526 722.4114832535886,201.89473684210523 815,204 C 907.5885167464114,206.10526315789477 1009.311004784689,350.3157894736842 1115,390 C 1220.688995215311,429.6842105263158 1330.3444976076555,364.8421052631579 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>

    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="48%" y1="0%" x2="52%" y2="100%"><stop offset="5%" stopColor="#faeab1"></stop><stop offset="95%" stopColor="#c58940"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 131.28571428571428,318.75 262.57142857142856,337.5 379,308 C 495.42857142857144,278.5 597,200.75 715,219 C 833,237.25 967.4285714285716,351.5 1091,381 C 1214.5714285714284,410.5 1327.2857142857142,355.25 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path></svg>
    </div>
    </section>
  )
}

export default Feature2                                             

