import { useState, useEffect } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { TypeAnimation } from 'react-type-animation';
import overlay from '../assets/imgs/desktop.svg'
import deviceHP from '../assets/imgs/smartphone1.png'
import { useSteteContext } from "../context/StateContext";


const Carousel = () => {
    const dataSlider = [{
        url : 'https://images.unsplash.com/photo-1589995635011-078e0bb91d11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
        alt : 'img1',
        title : '“DAN SUNGGUH, TELAH KAMI MUDAHKAN AL-QUR-AN UNTUK PERINGATAN...”',
    },{
        url : 'https://images.unsplash.com/photo-1574246604907-db69e30ddb97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzbGltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        alt : 'img2',
        title : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore harum sed dolore atque cum in, inventore ratione magni temporibus blanditiis!',
    },{
        url : 'https://images.unsplash.com/photo-1574545640323-59dc7a2b4a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzbGltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        alt : 'img3',
        title : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore harum sed dolore atque cum in',
    },{
        url : 'https://images.unsplash.com/photo-1573939705721-9fa2cdcda901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG11c2xpbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt : 'img4',
        title : 'Menghafal Itu Mudah',
    },{
        url : 'https://images.unsplash.com/photo-1589495180659-8bcc1c5d4908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2xpbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt : 'img5',
        title : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',                                
    }]

    const lengt = dataSlider.length - 1;
    const [currIndex, setCurrIndex] = useState(0)
    const {screenView,beranda} = useSteteContext()
    
    
    useEffect(()=>{

        beranda.current?.addEventListener('animationend', () => {
            beranda.current?.classList.remove('flashFx')
        })

        const autoSlide = setInterval(()=>{
            nextSlide()
        },7000)
        return () => {
            clearInterval(autoSlide)
        }
    },[currIndex])

    const nextSlide = () => {
        setCurrIndex(currIndex == lengt ? 0 : currIndex + 1)
        beranda.current?.classList.add('flashFx')
    }

    const prevSlide = () => {
        setCurrIndex(currIndex < 1 ? lengt : currIndex - 1)
        beranda.current?.classList.add('flashFx')
    }
  return (
    <>
    <section ref={beranda} className="relative h-[50vh] lg:h-[85vh] w-[100%] overflow-hidden m-auto before:w-full before:h-full before:absolute before:bg-gradient-to-t before:from-black/40 before:from-1% before:via-transparent before:to-black/40 before:to-1% before:z-10">
        {dataSlider.map((data,idx) => (
             idx == currIndex && <div key={idx}
                    className={`w-full relative`}
                    >
                <img src={data.url} alt={data.alt} className="w-[100%] h-[50vh] lg:h-[89vh] obsolute object-cover"/>
                <h1 data-aos="fade-left" className="absolute top-[200px] md:top-[20vh] lg:top-[35vh] right-10 md:flex md:right-0 md:left-0 lg:left-[30vw] text-white text-[22px] md:text-[39px] font-bold drop-shadow-[0px_0px_7px_#C58940] z-20"><TypeAnimation style={screenView == 'mobile' ? {
    height: '250px',
    width: '320px',
    display: 'block',
    margin: 'auto'
  } : screenView == 'tablet' ? {
    height: '350px',
    width: '500px',
    display: 'block',
    margin: 'auto'
  } : screenView == 'desktop' ? {
    height: '450px',
    width: '650px',
    display: 'block',
    margin: 'auto'
  } : null} sequence={[`${data.title}`]} speed={50} cursor={false}/></h1>
            </div>
        ))}
        <div className="absolute top-0 bottom-0 flex justify-between items-center w-full z-30"><IoIosArrowBack className="text-[28px] md:text-[38px] lg:text-[44px] text-white bg-slate-500 rounded-l-full opacity-40 hover:opacity-80 cursor-pointer"onClick={prevSlide}/><IoIosArrowForward className="text-[28px] md:text-[38px] lg:text-[44px] text-white bg-slate-500 rounded-r-full opacity-40 hover:opacity-80 cursor-pointer"onClick={nextSlide}/></div>
        <div className='absolute left-0 right-0 bottom-2 z-30 flex justify-center gap-3'>{dataSlider.map((data,idx) => {
                return <span key={idx} className={`${currIndex == idx ? 'bg-slate-200 h-2 w-2 rounded-full inline-block cursor-pointer' : 'bg-slate-400 hover:bg-slate-200 h-2 w-2 rounded-full inline-block cursor-pointer'}`} onClick={()=>setCurrIndex(idx)}></span>
        })}</div>
        {screenView == 'desktop' && <div className="w-full h-full absolute -bottom-[38vh] z-10">
            <img src={overlay} alt="OverLay" className="w-full h-full"/>
        </div>}
    </section>
        {screenView == 'desktop' && <img data-aos="fade-up" src={deviceHP} alt="Smartphone" className="lg:w-[18vw] lg:h-[65vh] z-20 absolute lg:left-[20vw] lg:bottom-0"/>}
  </>)
}

export default Carousel