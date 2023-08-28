import backImg from '../../assets/imgs/example.png'
import heroImg from '../../assets/imgs/example.png'
import { Link } from 'react-router-dom'
let title = 'Tantangan SIDAQ'
const Article = () => {
  return (
    <article>
        <header className='relative h-[12vh] lg:h-[14vh] overflow-hidden before:w-full before:h-full before:absolute before:bg-gradient-to-t before:from-black/60 before:from-10% before:via-transparent before:to-black/60 before:to-10% before:z-10'>
            <h1 className='text-[26px] md:text-[40px] pl-4 md:pl-20 lg:pl-40 py-4 font-bold text-white absolute z-10'>ARTIKEL DAKWAH</h1>
            <img src={backImg} alt="Background Image" className='absolute bottom-0 my-auto top-0 -z-10'/>
        </header>
        <main>
            <span><h3 className='mt-4 mb-8 md:ml-8 lg:mt-8 font-[500] md:text-[18px]'><Link to={'/home'}>Home</Link> / <span className='underline text-[#E5BA73]'>{title}</span></h3></span>
            <section className='p-1 md:mx-20 md:px-20 lg:mx-60 bg-white'>
                <header className='md:pt-10 lg:pt-8'>
                    <img src={heroImg} alt="/" className='w-full object-cover h-[40vh] md:h-[35vh] lg:h-[50vh]'/>
                    <h1 className='text-[26px] my-5 font-semibold'>{title}</h1>
                </header>
                <section className='p-2 text-[18px]'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, omnis tempore. Est rem consectetur adipisci pariatur temporibus totam corrupti dolore ab minima incidunt illum accusamus laborum eos, voluptate impedit quia iure modi tempore deleniti expedita explicabo amet libero sapiente. Quidem atque odit praesentium dolores natus aliquid quos iusto ea, commodi beatae asperiores, consequatur quae tempore id at dolore. At nemo, deserunt fugit qui nulla voluptates minima ab minus et quaerat temporibus dolores culpa rem autem exercitationem modi est magni iste enim tenetur error. Maxime labore ab mollitia temporibus et! Dolorem facere soluta a optio odit pariatur fuga at nobis iusto.
                    </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, vero saepe sapiente provident eum pariatur inventore neque amet esse corrupti nihil nostrum quibusdam corporis nisi sit minus, illum ducimus, optio rem similique possimus itaque accusantium nobis perferendis. Nam id laudantium fuga tempore, temporibus, quaerat ducimus sequi maiores numquam nisi reprehenderit?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium fugiat suscipit, facilis aliquid quae. Recusandae quia, ipsa quod tempora perspiciatis sequi odit ea laborum maiores et quisquam cumque numquam accusantium doloremque repellat error, corporis fuga optio nesciunt expedita asperiores eaque. Obcaecati id beatae molestias unde laudantium quisquam doloremque laborum adipisci vel nulla ut perspiciatis libero tenetur saepe, nihil quia reprehenderit voluptatum aliquid qui? Accusamus quas corporis architecto non cupiditate?</p>
                </section>
            </section>
        </main>
    </article>
  )
}

export default Article