import playstore from '../assets/imgs/playstore.png'
import appstore from '../assets/imgs/appstore.png'
import example from '../assets/imgs/SVG1.svg'


const Download = () => {
  return (
    <section className='relative w-[93%] md:w-[88%] h-[40vh] lg:h-[75vh] float-right rounded-tl-3xl px-5 rounded-bl-3xl mt-20 md:mb-0 lg:mt-40 overflow-hidden bg-gradient-to-l from-[#FAEAB1] to-[#FFFFFF] inset-0 shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)] flex gap-x-4 justify-evenly items-center'>
      <header className='self-end w-[180px] md:w-[300px] h-[260px] md:h-[340px] lg:h-[460px] bottom-0'>
        <img src={example} alt="" className='w-[180px] md:w-[240px] lg:w-[300px]'/>
      </header>
      <main className='w-[55%] md:w-[45%]'>
        <h1 className='text-[20px] md:text-[34px] lg:text-[38px] text-[#AD7B3E] font-bold lg:mb-10'>Download Aplikasi Dan Bergabung Sekarang Juga!</h1>
        <div className='flex flex-col md:flex-row md:mx-0 gap-4 lg:gap-14 w-[90px] md:w-[200px] lg:w-[380px] lg:h-[60px] mt-5'>
          <img src={playstore} alt="Playstore" className='w-[140px] md:w-[250px] lg:w-[380px] lg:h-[60px] h-[30px] md:h-[40px] cursor-pointer'/>
          <img src={appstore} alt="Appstore" className='w-[140px] md:w-[250px] lg:w-[380px] lg:h-[60px] h-[30px] md:h-[40px] cursor-pointer'/>
        </div>
      </main>
    </section>
  )
}

export default Download