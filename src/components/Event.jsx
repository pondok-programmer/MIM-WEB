import EventCard from "./EventCard"
import img from '../assets/imgs/example.png'
import { useSteteContext } from "../context/StateContext"
import { forwardRef } from "react"

const Event = () => {
  const dataKajian = [{
    title: 'Kajian 1 Doa',
    img: img,
    date: '1 - Jul - 2023',
    time: '21:00 - 21:30',
    join: 'https://www.linkedin.com/in/edward-supratman-dev/'
  },{
    title: 'Kajian Doa Bersama',
    img: img,
    date: '9 - Jul - 2023',
    time: '20:00 - 21:30',
    join: 'https://www.instagram.com/edwardsprtmn'
  },{
    title: 'Kajian Shidaq Muharram',
    img: img,
    date: '19 - Jul - 2023',
    time: '20:00 - 22:30',
    join: 'https://www.facebook.com/edward.s.14811/'
  },{
    title: 'Kajian Jogja Muslim Fest',
    img: img,
    date: '21 - Jul - 2023',
    time: '22:00 - 23:30',
    join: 'https://www.youtube.com'
  },]
  const {setIsShowPopup,kajian} = useSteteContext()
  return (
    <section ref={kajian} className="flex flex-col -mt-[150px] md:-mt-60 lg:-mt-[400px] h-screen md:h-[80vh] lg:h-[95vh] md:gap-y-20 w-full items-center justify-center lg:px-4 ">
      <header className="bg-[#FAEAB1] w-fit p-[7.9px] md:p-3 md:px-6 rounded-br-2xl rounded-tl-2xl shadow-[0px_-8px_1px_#AD7B3E]">
        <h1 className="text-[20px] md:text-[28px] text-[#E5BA73] font-bold">Kajian SIDAQ</h1>
      </header>
      <main className="flex justify-center items-center flex-col lg:flex-row flex-wrap gap-10 lg:gap-20 lg:gap-x-40 w-full lg:w-[80%] p-6 overflow-x-scroll scrollbar-hide scroll-smooth md:shadow-[-1px_-10px_10px_rgba(0,0,0,0.6)] md:bg-[#FAF8F1] z-10">
        {dataKajian.map((data,idx) => (
          <EventCard key={idx} img={data.img} title={data.title} time={data.time} date={data.date} showPopup={setIsShowPopup} join={data.join}/>

        ))}
      </main>
    </section>
  )
}

export default Event