import { CiLock, CiUser, CiMail } from 'react-icons/ci'
import { PiPhoneLight }  from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { ButtonCustom, InputCustom } from '../../components/ui'
import brandMIM from '../../assets/imgs/logo-mim-long.png'

const SignUp = () => {
  return (
    <>
      {/* <div className='bg-gradient-to-b from-[#C58940] to-[#FAEAB1] h-[50vh] lg:h-[100vh] lg:-mt-[380px] lg:-skew-y-[30deg] w-full'></div> */}
        <section className='absolute top-0 bg-[lightgray]/20 backdrop-blur-sm bottom-0 left-0 right-0 flex flex-col lg:flex-row lg:px-10 items-center justify-evenly gap-y-5'>
          <div className='w-1/2 md:w-1/1 lg:mb-20'>
            <img src={brandMIM} alt="Your Logo" />
          </div>
          <div className='max-w-[98%] md:w-[70%] lg:w-[40%]'>
            <form className='p-5 bg-gradient-to-l from-[#C58940] from-20% via-[#E5BA73] via-45% to-[#FAEAB1] backdrop-blur-sm rounded-xl text-center shadow-[0px_0px_9px_rgba(0,0,0,0.3)]'>
              <h1 className='text-2xl md:text-[35px] font-[700] mb-5 mt-2 text-white'>Daftar Admin</h1>
              <div className='h-[262px] md:h-[332px] overflow-y-auto scrollbar-hide '>
              <InputCustom placeholder={'Nama Lengkap'} className={'md:text-[26px] text-white placeholder:text-white focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-white mb-5 md:mb-10'} icon={<CiUser className='text-xl md:text-[28px] text-white'/>}/>
              <InputCustom type='email' placeholder={'Email'} className={'md:text-[26px] text-white placeholder:text-white focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-white'} icon={<CiMail className='text-xl md:text-[28px] text-white'/>}/>
              <InputCustom type='number' placeholder={'Nomor Telepon'} className={'md:text-[26px] placeholder:text-white focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4 appearance-none'} classNameDiv={'border-b-[1.7px] border-white'} icon={<PiPhoneLight className='text-xl md:text-[28px] text-white'/>}/>
              <InputCustom type='password' placeholder={'Kata Sandi'} className={'md:text-[26px] placeholder:text-white focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-white'} icon={<CiLock className='text-xl md:text-[28px] text-white'/>}/>
              <InputCustom type='password' placeholder={'Konfirmasi Kata Sandi'} className={'md:text-[26px] placeholder:text-white focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-white'} icon={<CiLock className='text-xl md:text-[28px] text-white'/>}/>
              </div>
              <Link to={'/admin/'}><ButtonCustom value={'Daftar'} className={'bg-[#E5BA73] rounded-[20px] text-white text-[15px] md:text-[23px] font-[700] my-5 py-2 px-3 md:py-3'}/></Link>
            </form>
          </div>
        </section>
    </>
  )
}

export default SignUp