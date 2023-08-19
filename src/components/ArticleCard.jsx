import { ButtonCustom } from "./ui"

const ArticleCard = ({img,title}) => {
  return (
    <section className="relative rounded-lg p-[7px] w-[330px] h-fit bg-[#FAEAB1] shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
        <section className="rounded-lg h-[37vh] md:h-[30vh] lg:h-[40vh] overflow-hidden shadow-[0px_0px_10px_rgba(0,0,0,0.3)] border-white border-2 relative before:w-full before:h-full before:absolute before:bg-gradient-to-t before:from-black/60 before:from-1% before:to-transparent before:to-70% before:z-10">
            <img src={img} alt={title} className="w-[330px] h-full object-cover" />
        <section className="absolute bottom-0 text-white w-full flex z-10">
            <h1 className="flex-[3] font-bold text-[20px] p-2 truncate">{title}</h1>
            <ButtonCustom value={'Baca'} className={'flex-[1] py-[6px] px-3 text-[20px] font-bold rounded-lg rounded-br-none bg-white/70 w-full'}/>
        </section>
        </section>
    </section>
  )
}

export default ArticleCard