import { useSteteContext } from "../context/StateContext"
import { ButtonCustom } from "./ui"

const Card = ({img,title,time,date,showPopup,join}) => {
  const {setLinkTo} = useSteteContext()
  const handleButton = () => {
    showPopup(true)
    setLinkTo({img:img,title:title,time:time,date:date,join:join})
  }
  return (
    <section className="w-[260px] md:w-[320px] h-fit rounded-tl-3xl rounded-br-3xl bg-white p-2 md:p-3 shadow-[0px_0px_10px_rgba(0,0,0,0.5)]">
        <section className="relative rounded-tl-3xl h-[200px] md:h-[240px] overflow-hidden before:w-full before:h-full before:absolute before:bg-gradient-to-t before:from-black/60 before:from-1% before:to-transparent before:to-70% before:z-10">
          <img src={img} alt={title} className="w-full h-full object-cover"/>
          <h1 className="truncate w-full absolute bottom-0 ml-2 text-[22px] md:text-[27px] font-[600] text-white z-20">{title}</h1>
        </section>
        <section className="flex items-center pt-3 px-2 md:px-3">
          <span className="flex-[2.9] text-[18px] md:text-[21px]">
            <p>{time}</p>
            <p>{date}</p>
          </span>
          <ButtonCustom value={'IKUTI'} eventOnClick={handleButton} className={'flex-[1] bg-[#E5BA73] h-10 md:h-14 rounded-md text-[20px] px-3 md:px-5 font-bold text-white'}/>
        </section>
    </section>
  )
}

export default Card