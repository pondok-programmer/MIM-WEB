
import img from '../assets/imgs/example.png'
import { useSteteContext } from '../context/StateContext'
import ArticleCard from './ArticleCard'

const Article = () => {
  const dataArtikel = [{
    title: 'Mensurgakan Indonesia',
    img: img,
    id:1
  },{
    title: 'Pondok IT',
    img: img,
    id:2
  },{
    title: 'SIDAQ',
    img: img,
    id:3
  },{
    title: 'Mensurgakan Indonesia',
    img: img,
    id:4
  }]

  const {artikel} = useSteteContext()

  return (
    <>
      <span className=" h-full"><svg width="100%" height="30%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className=" transition duration-300 ease-in-out delay-150"><path ref={artikel} d="M 0,600 C 0,600 0,300 0,300 C 110.72727272727272,271.1961722488038 221.45454545454544,242.39234449760764 323,226 C 424.54545454545456,209.60765550239236 516.9090909090909,205.62679425837322 608,201 C 699.0909090909091,196.37320574162678 788.9090909090909,191.10047846889952 878,195 C 967.0909090909091,198.89952153110048 1055.4545454545455,211.9712918660287 1149,231 C 1242.5454545454545,250.0287081339713 1341.2727272727273,275.0143540669857 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="#e5ba73" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
      </span>
      <span></span>
      <section className="flex flex-col bg-[#E5BA73] relative h-[88vh] md:h-[77vh] lg:h-[55vh] items-center justify-center ">
      <header data-aos="fade-out" className="w-fit absolute -top-3 p-2 -mt-10 md:-mt-14 md:p-3 md:px-6 rounded-t-lg border-t-4 border-r-4 border-l-4">
        <h1 className="text-[20px] md:text-[28px] text-white font-bold">Artikel Dakwah</h1>
      </header>
      <main data-aos="slide-up" className="flex md:justify-center items-center flex-col flex-wrap gap-5 lg:gap-10 lg:gap-x-20 w-full lg:w-full p-5 overflow-x-scroll scrollbar-hide scroll-smooth shadow-[inset_0px_5px_5px_rgba(0,0,0,0.3)] z-10">
        {dataArtikel.map(data => (
          <ArticleCard key={data.id} img={data.img} title={data.title} path={data.title}/>
        ))}
      </main>

    </section></>
  )
}

export default Article