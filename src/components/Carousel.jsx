import { useState, useEffect } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


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
    
    useEffect(()=>{
        const autoSlide = setInterval(()=>{
            setCurrIndex(currIndex == lengt ? 0 : currIndex + 1)
        },4000)
        return () => clearInterval(autoSlide)
    },[currIndex])

  return (
    <section className="relative h-[50vh] lg:h-[80vh] w-[100%] overflow-hidden m-auto border-box">
        {dataSlider.map((data,idx) => (
             idx == currIndex && <div key={idx}
                    className={`w-full relative`}
                    >
                <img src={data.url} alt={data.alt} className="w-[100%] h-[50vh] lg:h-[80vh] obsolute object-cover"/>
                <h1 className="absolute top-20 right-10 text-white text-[30px]">{data.title}</h1>
            </div>
        ))}
        <div className="absolute top-0 bottom-0 flex justify-between items-center w-full"><IoIosArrowBack className="text-[28px] text-white bg-slate-500 rounded-l-full opacity-40 hover:opacity-80 cursor-pointer"onClick={()=>setCurrIndex(currIndex < 1 ? lengt : currIndex - 1)}/><IoIosArrowForward className="text-[28px] text-white bg-slate-500 rounded-r-full opacity-40 hover:opacity-80 cursor-pointer"onClick={()=>setCurrIndex(currIndex == lengt ? 0 : currIndex + 1)}/></div>
        <div className='absolute left-0 right-0 bottom-2 z-20 flex justify-center gap-3'>{dataSlider.map((data,idx) => {
                return <span key={idx} className={`${currIndex == idx ? 'bg-slate-200 h-2 w-2 rounded-full inline-block cursor-pointer' : 'bg-black hover:bg-slate-300 h-2 w-2 rounded-full inline-block cursor-pointer'}`} onClick={()=>setCurrIndex(idx)}></span>
        })}</div>
    </section>
  )
}

export default Carousel