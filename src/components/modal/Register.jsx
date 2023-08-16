import { useState } from 'react'
import heroImg from '../../assets/imgs/example.png'
import { ButtonCustom, InputCustom } from '../ui'
import { useSteteContext } from '../../context/StateContext'
import { SlClose } from 'react-icons/sl'

const Register = ({setIsShow}) => {
  const {screenView} = useSteteContext()
  const [slide, setSlide] = useState(1)
  const [isHaveChildren, setIsHaveChildren] = useState(false)
  const [fullName, setFullName] = useState('')
  const [birthOfPlace, setBirthOfPlace] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [job, setJob] = useState('')
  const [numberOfChildren, setNumberOfChildren] = useState(isHaveChildren && 0)
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [status, setStatus] = useState('')
  const [collage, setCollage] = useState('selectOptionCollage')

console.log(status,collage)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fullName,birthOfPlace,dateOfBirth,job,numberOfChildren,email,phoneNumber,password,passwordConfirmation)
  }

  const renderSlide = () => {
    if(slide == 1) {
      return <>
      <h1 className='text-[25px] lg:text-[20px] mt-8 lg:mt-0 text-white font-bold'>Informasi Pribadi</h1>
      <InputCustom 
            type='text'
            placeholder={'Nama lengkap anda'} 
            classNameDiv={'border-2 rounded-full'} 
            value={fullName}
            eventOnChange={(e)=>setFullName(e.target.value)}
            className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}
            />
      <InputCustom 
            type='text'
            placeholder={'Tempat lahir'} 
            classNameDiv={'border-2 rounded-full'} 
            value={birthOfPlace}
            eventOnChange={(e)=>setBirthOfPlace(e.target.value)}
            className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}
            />
      <InputCustom 
            type='text'
            placeholder={'Tanggal lahir'} 
            classNameDiv={'border-2 rounded-full'} 
            value={dateOfBirth}
            eventOnChange={(e)=>setDateOfBirth(e.target.value)}
            className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}
            />
      <span className='flex justify-around'>
        <InputCustom type='radio' classNameDiv={'w-fit border-2 px-3 py-[11px] lg:py-[6px] rounded-full flex gap-4 font-[600] text-white text-[18px] lg:text-[16px] cursor-pointer'} name={'gender'} id={'akhwat'} labelFor={'akhwat'} labelValue={'Akhwat'}/>
        <InputCustom type='radio' classNameDiv={'w-fit border-2 px-3 py-[11px] lg:py-[6px] rounded-full flex gap-4 font-[600] text-white text-[18px] lg:text-[16px] cursor-pointer'} name={'gender'} id={'ikhwan'} labelFor={'ikhwan'} labelValue={'Ikhwan'}/>
      </span>
      <div className='flex justify-around'>
        <span>
          <select 
            name="status" 
            id="status" 
            className='bg-[#D9D9D9] rounded-full border-none text-white cursor-pointer py-3 lg:py-2'
            value={status}
            onChange={(e)=>setStatus(e.target.value)}
            >
          <option value="Status" selected={true} disabled>Status</option>
          <option value="Menikah">Menikah</option>
          <option value="Lajang">Lajang</option>
          <option value="Bercerai">Bercerai</option></select>
        </span>
        <span>
          <select 
              name="pendidikan" 
              id="pendidikan" 
              className='bg-[#D9D9D9] rounded-full border-none text-white cursor-pointer py-3 lg:py-2'
              value={collage}
              onChange={(e)=>setCollage(e.target.value)}>
          <option value="selectOptionCollage" disabled>Pendidikan</option>
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
        </span>
      </div>
      <InputCustom 
          type='text'
          placeholder={'Pekerjaan'} 
          classNameDiv={'border-2 rounded-full'} 
          className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}
          value={job}
          eventOnChange={(e)=>setJob(e.target.value)}
          />
      <InputCustom 
          type='number' 
          placeholder={'Jumlah Anak'} 
          classNameDiv={'border-2 rounded-full'} 
          className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}
          value={numberOfChildren}
          eventOnChange={(e)=>setNumberOfChildren(e.target.value)}
          disabled={isHaveChildren}
          />
      <ButtonCustom 
          type='button'
          value={'SELANJUTNYA'} 
          className={'bg-[#D9D9D9] py-3 lg:py-2 mt-10 lg:mt-2 text-white font-bold rounded-full'} 
          eventOnClick={()=>setSlide(2)}
          />
          </>
    } else if (slide == 2) {
      return <>
        <span className='flex gap-x-12'>
          <ButtonCustom 
              type='button'
              className={'w-min h-min py-2 lg:py-1 px-3 rounded-l-full text-white bg-slate-400'} 
              value={'Kembali'} 
              eventOnClick={()=>setSlide(1)}
              />
          <h1 className='text-[25px] lg:text-[20px] font-bold text-white'>Buat Akun</h1>
        </span>
        <InputCustom 
            type='email' 
            placeholder={'Masukan email anda'} 
            classNameDiv={'border-2 rounded-full py-2 lg:py-0'} 
            className={'text-[19px] text-white placeholder:text-white w-full focus:ring-0 border-none'}
            value={email}
            eventOnChange={(e)=>setEmail(e.target.value)}
            />
        <InputCustom 
            type='number' 
            classNameDiv={'border-2 rounded-full py-2 lg:py-0'} 
            className={'text-[19px] text-white placeholder:text-white w-full focus:ring-0 border-none'} 
            placeholder={'Masukan nomor telephone anda'}
            value={phoneNumber}
            eventOnChange={(e)=>setPhoneNumber(e.target.value)}
            />
        <InputCustom 
            type='password' 
            classNameDiv={'border-2 rounded-full py-2 md:pr-5 lg:pr-3 lg:py-0'} 
            className={'text-[19px] text-white placeholder:text-white w-full focus:ring-0 border-none'} 
            placeholder={'Kata sandi'}
            value={password}
            eventOnChange={(e)=>setPassword(e.target.value)}
            />
        <InputCustom 
            type='password' 
            classNameDiv={'border-2 rounded-full py-2 md:pr-5 lg:pr-3 lg:py-0'} 
            className={'text-[19px] text-white placeholder:text-white w-full focus:ring-0 border-none'} 
            placeholder={'Konfirmasi kata sandi'}
            value={passwordConfirmation}
            eventOnChange={(e)=>setPasswordConfirmation(e.target.value)}
            />
        <ButtonCustom 
            type='submit'
            value={'MENDAFTAR'} 
            className={'bg-[#D9D9D9] font-bold text-white py-4 lg:py-2 mt-20 rounded-full'}
            />
        <p className='text-white pl-4'>Dengan mendaftar nda menyetujui syarat dan kebijakan yang dibuat oleh pondok</p>
        </>
    }
  }//end func render Slide

  return (
    <div className='fixed top-0 w-full z-50'>
        <section 
          className='bg-[#FAF8F1]/40 backdrop-blur-sm p-3 pb-10 md:p-0 md:pb-0 w-full md:w-fit md:h-fit overflow-hidden flex flex-col md:flex-row md:justify-evenly md:gap-10 justify-center items-center absolute top-0 bottom-0 left-0 right-0 m-auto rounded-xl z-50'>
            {screenView == 'desktop' && 
            <header 
              className='relative w-[40vw] bg-white py-10'>
                <img src={heroImg} alt="Hero" className=''/>
                <h1 className='absolute top-0 bottom-0 flex justify-center items-center mx-auto left-0 right-0'></h1>
            </header>}
            <span 
              className='absolute right-4 rounded-full bg-[#D9D9D9] p-1 top-2 right-2 font-bold text-[18px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.5)] cursor-pointer' 
              onClick={()=>setIsShow(false)}><SlClose 
              className='text-[30px] md:text-[35px]'
              />
            </span>
            <form 
              className='w-full md:w-[65vw] lg:w-[25vw] flex flex-col gap-5 md:m-10 lg:m-0 lg:mr-10 '
              onSubmit={(e)=>handleSubmit(e)}
              >
            {renderSlide()}
            </form>
        </section>
        <div className='bg-black opacity-50 w-full h-screen' onClick={()=>setIsShow(false)}></div>
    </div>
  )
}

export default Register