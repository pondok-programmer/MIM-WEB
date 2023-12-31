import homeFeature from '../assets/imgs/home-screen.png'
// import gif1 from '../assets/imgs/1.gif'
// import gif2 from '../assets/imgs/2.gif'
// import gif3 from '../assets/imgs/3.gif'
// import gif4 from '../assets/imgs/4.gif'
import svg1 from '../assets/imgs/SVG1.svg'
import svg2 from '../assets/imgs/SVG2.svg'
import svg3 from '../assets/imgs/SVG3.svg'
import { useState } from 'react'
import { useSteteContext } from '../context/StateContext'

const Feature1 = () => {
const dataFeature = [{
  title: 'MIM Standar',
  description: 'Adalah MIM Membaca Ayat Al-Quran ',
  img: homeFeature,
  gif: svg1,
  id: 1
},{
  title: 'MIM Doa Dalam Quran',
  description: 'Adalah MIM Membaca Ayat - ayat yang berkaitan dengan doa',
  img: homeFeature,
  gif: svg2,
  id: 2
},{
  title: 'MIM Bacaan Sholat',
  description: 'Adalah MIM Membaca Ayat - ayat yang ada pada sholat',
  img: homeFeature,
  gif: svg3,
  id: 3
},{
  title: 'Tsaqifa',
  description: 'Adalah metode',
  img: homeFeature,
  gif: svg2,
  id: 4
}]
const {fitur} = useSteteContext()
const [isActive, setIsActive] = useState(false)
const [playVid, setPlayVid] = useState(false)
const handleClick = id => {
  setIsActive(id)
  setPlayVid(id)
}
  return (
    <section ref={fitur} className="relative md:mt-40">
      <header data-aos="fade-up" className="text-center text-[#C58940]">
        <h1 className="text-[26px] md:text-[28px] font-bold mb-2">Fitur - Fitur</h1>
      </header> 
      <main>
        <article>
        <h2 className='text-[22px] text-white bg-[#FAEAB1] md:bg-transparent p-1 rounded-t-lg md:rounded-t-none md:absolute md:m-auto md:-left-[2.5vw] lg:left-[6vw] lg:text-black md:top-0 md:bottom-0 h-fit w-fit md:rotate-[-90deg] md:text-[30px] z-40'>Fitur Utama</h2>
          <section data-aos="fade-up" className='relative flex gap-1 md:gap-5 px-5 md:pl-10 md:mx-[40px] lg:mx-[185px] md:rounded-xl bg-gradient-to-r from-[#FAEAB1] to-[#FFFFFF] shadow-[inset_0px_0px_10px_rgba(0,0,0,0.6)]'>
              {dataFeature.map((data,id)=> (
            <div key={data.id} onClick={()=>handleClick(id)} className={`relative ${isActive == id ? 'h-[75vh] lg:h-[80vh] flex-[1.1] md:flex-[3.3] lg:flex-[1.5]' : 'h-[75vh] lg:h-[80vh] flex-[0.1] md:flex-[0.9] lg:flex-[0.9]'} flex items-center justify-center mx-auto transition-[flex] duration-700 ease-out-flex cursor-pointer`}>
                {playVid == id ? (<><img src={data.img} alt={data.title} className='absolute w-full h-full object-cover'/>
                <span className='w-full bottom-0 absolute bg-black/30 text-white text-center z-10'><h2 className='text-[20px] font-bold my-4'>{data.title}</h2><p className='text-[17px]'>{data.description}</p></span></>) 
                               : (<><img src={data.gif} alt={data.title} className='w-8 md:w-[90px] h-full object-cover'/>
                <h2 className='text-[28px] text-white font-[600] absolute w-[75vh] h-[6vw] md:w-[75vh] md:h-[11vw] lg:w-[80vh] lg:h-[7vw] flex justify-center items-center bg-black/20 z-10 rotate-[-90deg]'>{data.title}</h2></>)}
            </div>
              ))}
          </section>
        </article>
      </main>
    </section>
  )
}

export default Feature1