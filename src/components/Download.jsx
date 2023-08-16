import playstore from '../assets/imgs/playstore.svg'
import example from '../assets/imgs/SVG1.svg'


const Download = () => {
  return (
    <section className='relative w-[93%] h-[40vh] float-right rounded-tl-3xl px-5 rounded-bl-3xl my-20 overflow-hidden bg-gradient-to-l from-[#FAEAB1] to-[#FFFFFF] shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)] flex justify-evenly items-center'>
      <header className='self-end w-[40%] bottom-0 mt-10'>
        <img src={example} alt="" className='w-[110px] object-cover'/>
      </header>
      <main className='w-[55%] border-2'>
        <h1 className='text-[21px] text-[#AD7B3E] font-bold'>Download Aplikasi Dan Bergabung Sekarang Juga!</h1>
        <div className='flex justify-around w-[300px] gap-10 mt-5'>
          <img src={playstore} alt="Playstore" />
          <img src={playstore} alt="Appstore" />
        </div>
      </main>
    </section>
  )
}

export default Download