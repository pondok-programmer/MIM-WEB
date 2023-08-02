import { useState } from 'react'
import heroImg from '../../assets/imgs/example.png'
import { ButtonCustom, InputCustom } from '../ui'
import { useSteteContext } from '../../context/StateContext'
import { SlClose } from 'react-icons/sl'

const Register = ({setIsShow}) => {
  const {isMobile} = useSteteContext()
  const [slide, setSlide] = useState(1)

  const renderSlide = () => {
    if(slide == 1) {
      return <>
      <h1 className='text-[25px] lg:text-[20px] mt-8 lg:mt-0 text-white font-bold'>Informasi Pribadi</h1>
      <InputCustom placeholder={'Nama lengkap anda'} classNameDiv={'border-2 rounded-full'} className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}/>
      <InputCustom placeholder={'Tempat lahir'} classNameDiv={'border-2 rounded-full'} className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}/>
      <InputCustom placeholder={'Tanggal lahir'} classNameDiv={'border-2 rounded-full'} className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}/>
      <span className='flex justify-around '>
      <InputCustom type='radio' classNameDiv={'w-fit border-2 px-3 py-[11px] lg:py-[6px] rounded-full flex gap-4 font-[600] text-white text-[18px] lg:text-[16px] cursor-pointer'} name={'gender'} id={'akhwat'} labelFor={'akhwat'} labelValue={'Akhwat'}/>
      <InputCustom type='radio' classNameDiv={'w-fit border-2 px-3 py-[11px] lg:py-[6px] rounded-full flex gap-4 font-[600] text-white text-[18px] lg:text-[16px] cursor-pointer'} name={'gender'} id={'ikhwan'} labelFor={'ikhwan'} labelValue={'Ikhwan'}/></span>
      <div className='flex justify-around'>
      <span>
        <select name="status" id="status" className='bg-[#D9D9D9] rounded-full border-none text-white cursor-pointer py-3 lg:py-2'>
        <option selected disabled value="Status">Status</option>
        <option value="Menikah">Menikah</option>
        <option value="Lajang">Lajang</option>
        <option value="Bercerai">Bercerai</option></select>
      </span>
      <span>
        <select name="pendidikan" id="pendidikan" className='bg-[#D9D9D9] rounded-full border-none text-white cursor-pointer py-3 lg:py-2'>
        <option selected disabled value="Pendidikan">Pendidikan</option>
        <option value="TK">TK</option>
        <option value="SD/Sederajat">SD</option>
        <option value="SMP/Sederajat">SMP/MTs/Sederajat</option>
        <option value="SMA/Sederajat">SMA/SMK/Sederajat</option>
        <option value="D1">D1</option>
        <option value="D2">D2</option>
        <option value="D3">D3</option>
        <option value="S1">S1</option>
        <option value="S2">S2</option>
        <option value="S3">S3</option>
        <option value="Tidak sekolah">Tidak sekolah</option>
        </select>
      </span></div>
      <InputCustom placeholder={'Pekerjaan'} classNameDiv={'border-2 rounded-full'} className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}/>
      <InputCustom type='number' placeholder={'Jumlah Anak'} classNameDiv={'border-2 rounded-full'} className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}/>
      <ButtonCustom value={'SELANJUTNYA'} className={'bg-[#D9D9D9] py-3 lg:py-2 mt-10 lg:mt-2 text-white font-bold rounded-full'} eventOnClick={()=>setSlide(2)}/></>
    } else if(slide == 2) {
      return <>
      <span className='flex gap-x-12'>
        <ButtonCustom className={'w-min h-min py-2 lg:py-1 px-3 rounded-l-full text-white bg-slate-400'} value={'Kembali'} eventOnClick={()=>setSlide(1)}/>
        <h1 className='text-[25px] lg:text-[20px] font-bold text-white'>Buat Akun</h1></span>
      <InputCustom type='email' placeholder={'Masukan email anda'} classNameDiv={'border-2 rounded-full py-2 lg:py-0'} className={'text-[19px] text-white placeholder:text-white w-full focus:ring-0 border-none'}/>
      <InputCustom type='number' classNameDiv={'border-2 rounded-full py-2 lg:py-0'} className={'text-[19px] text-white placeholder:text-white w-full focus:ring-0 border-none'} placeholder={'Masukan nomor telephone anda'}/>
      <InputCustom type='password' classNameDiv={'border-2 rounded-full py-2 lg:py-0'} className={'text-[19px] text-white placeholder:text-white w-full focus:ring-0 border-none'} placeholder={'Kata sandi'}/>
      <InputCustom type='password' classNameDiv={'border-2 rounded-full py-2 lg:py-0'} className={'text-[19px] text-white placeholder:text-white w-full focus:ring-0 border-none'} placeholder={'Konfirmasi kata sandi'}/>
      <ButtonCustom value={'MENDAFTAR'} className={'bg-[#D9D9D9] font-bold text-white py-4 lg:py-2 mt-20 rounded-full'}/>
      <p className='text-white pl-4'>Dengan mendaftar nda menyetujui syarat dan kebijakan yang dibuat oleh pondok</p>
      </>
    }
  }//end func render Slide

  return (
    <div className='fixed top-0 w-full z-40'>
        <section className='bg-[#FAF8F1]/40 backdrop-blur-sm p-3 pb-10 lg:p-0 lg:pb-0 w-full lg:w-fit lg:h-fit overflow-hidden flex flex-col lg:flex-row lg:justify-evenly lg:gap-10 justify-center items-center absolute top-0 bottom-0 left-0 right-0 m-auto rounded-xl z-50'>
          {!isMobile && 
          <header className='relative w-[40vw] bg-white py-10'>
              <img src={heroImg} alt="Hero" className=''/>
              <h1 className='absolute top-0 bottom-0 flex justify-center items-center mx-auto left-0 right-0'></h1>
          </header>}
          <span className='absolute right-4 rounded-full bg-[#D9D9D9] p-1 top-2 right-2 font-bold text-[18px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.5)] cursor-pointer' onClick={()=>setIsShow(false)}><SlClose className='text-[30px] lg:text-[35px]'/></span>
          <form className='w-full lg:w-[25vw] flex flex-col gap-5 lg:mr-10 '>
          {renderSlide()}
          </form>
        </section>
        <div className='bg-black opacity-50 w-full h-screen' onClick={()=>setIsShow(false)}></div>
    </div>
  )
}

export default Register