import { useState } from 'react'
import heroImg from '../../assets/imgs/example.png'
import { ButtonCustom, InputCustom } from '../ui'
import { useSteteContext } from '../../context/StateContext'
import instance from '../../services/api/api'
import { SlClose } from 'react-icons/sl'
import Select from 'react-select'
import Datepicker from 'react-tailwindcss-datepicker'

const Register = ({setIsShow}) => {
  const {screenView,setIsShowPopupAfterSignUp} = useSteteContext()
  const [slide, setSlide] = useState(1)
  const [isHaveChildren, setIsHaveChildren] = useState(false)
  const [value, setValue] = useState({ 
    startDate: null
    });
  const [formData,setFormData] = useState({
    fullName: '',
    placeOfBirth: '',
    dateOfBirth:  '',
    gender: '',
    address: '',
    status: '',
    collage: '',
    income: '',
    job: '',
    numberOfChildren: '',
    phoneNumber: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const optionCollage = [{value: 'TK', label: 'TK'
  },{
    value: 'SD/Sederajat', label: 'SD/Sederajat'
  },{
    value: 'SMP/MTS/Sederajat', label: 'SMP/MTS/Sederajat'
  },{
    value: 'SMA/SMK/Sederajat', label: 'SMA/SMK/Sederajat'
  },{
    value: 'Kuliah', label: 'Kuliah'
  },{
    value: 'Tidak Sekolah', label: 'Tidak Sekolah'
  }]
  const optionStatus = [{
    value: 'Lajang', label: 'Lajang'
  },{
    value: 'Menikah', label: 'Menikah'
  },{
    value: 'Bercerai', label: 'Bercerai'
  }]

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let data = new FormData();
    data.append('name', formData.fullName);
    data.append('tgl_lahir', formData.dateOfBirth);
    data.append('tempat_lahir',formData.placeOfBirth);
    data.append('jenkel', formData.gender);
    data.append('alamat', formData.address);
    data.append('no_telp', formData.phoneNumber);
    data.append('email', formData.email);
    data.append('pendidikan', formData.collage);
    data.append('pekerjaan', formData.job);
    data.append('range_gaji', formData.income);
    data.append('status', formData.status);
    data.append('jumlah_anak', formData.numberOfChildren);
    data.append('password', formData.password);
    data.append('password_confirmation', formData.passwordConfirmation);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/register',
      headers: {},
      data : data
    };

    instance
    .request(config)
    .then((response) => {
      // console.log(response);
      if(response.data.error === true){
        const errorMessage = Object.keys(response.data.message)
        if(errorMessage.includes('email')){
          alert('Email sudah terdaftar!')
          } else if(errorMessage.includes('tgl_lahir')){
          alert('Format tanggal lahir harus |tahun-bulan-tanggal|')
        } else if(errorMessage.includes('no_telp')){
          alert('Nomor telepon sudah terdaftar!')
        } else if(errorMessage.includes('email') && errorMessage.includes('no_telp')){
          alert('Email dan nomor telepon sudah terdaftar!')
        }else {
          alert('Gagal membuat akun. Coba lagi!')
        }
      } else {
          setIsShowPopupAfterSignUp(true)
          setIsShow(false)
      }
    })
    .catch((error) => {
      console.log(error);
    });
  } 
  
  const renderSlide = () => {
    if(slide == 1) {
      return <>
      <InputCustom 
            type='text'
            placeholder={'Nama lengkap anda'} 
            classNameDiv={'border-2 rounded-full'} 
            value={formData.fullName}
            eventOnChange={(e)=>setFormData({...formData, fullName : e.target.value})}
            className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}
            />
      <InputCustom 
            type='text'
            placeholder={'Tempat lahir'} 
            classNameDiv={'border-2 rounded-full'} 
            value={formData.placeOfBirth}
            eventOnChange={(e)=>setFormData({...formData, placeOfBirth : e.target.value})}
            className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}
            />
      <Datepicker
            useRange={false} 
            asSingle={true} 
            placeholder='Tanggal Lahir' 
            value={value} onChange={(e)=>{
              setValue(e)
              setFormData({...formData,dateOfBirth: e.startDate})
            }}
            inputClassName={'bg-transparent border-none focus:ring-0 text-white text-[18px] placeholder:text-white'}
            containerClassName={'border-2 bg-transparent border-white rounded-full py-1'}
            />
      <span className='flex justify-around'>
        <InputCustom type='radio' eventOnChange={(e)=>setFormData({...formData, gender : e.target.value})} classNameDiv={'w-fit border-2 px-3 py-[11px] lg:py-[6px] rounded-full flex gap-4 font-[600] text-white text-[18px] lg:text-[16px] cursor-pointer'} name={'gender'} id={'laki-laki'} value={'Laki-laki'} labelFor={'laki-laki'} labelValue={'Laki - laki'}/>
        <InputCustom type='radio' eventOnChange={(e)=>setFormData({...formData, gender : e.target.value})} classNameDiv={'w-fit border-2 px-3 py-[11px] lg:py-[6px] rounded-full flex gap-4 font-[600] text-white text-[18px] lg:text-[16px] cursor-pointer'} name={'gender'} id={'perempuan'} value={'Perempuan'} labelFor={'perempuan'} labelValue={'Perempuan'}/>
      </span>
      <textarea value={formData.address} placeholder='Alamat lengkap' onChange={(e)=>setFormData({...formData, address : e.target.value})} className='bg-transparent border-2 border-white rounded-full py-10 text-[18px] text-white placeholder:text-white'></textarea>
      <div className='flex justify-around'>
        <span>
          <Select styles={{
        control: (provided) => ({
            ...provided,
            backgroundColor: 'transparent',
            border: '1.7px solid white',
            borderRadius: '50px',
            padding: '6px 20px',
            boxShadow: 'none'
        }),
        singleValue: (provided) => ({
          ...provided,
          color: 'white',
          fontSize: '18px'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'white',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: 'white',
        }),
    }}
    value={formData.status ? { value: formData.status, label: formData.status } : null} onChange={(e)=>{setFormData({...formData, status: e.value})
          setIsHaveChildren(e.value == 'lajang' ? true : false)}} isSearchable={false} placeholder={'Status'} options={optionStatus}/>
        </span>
        <span>
          <Select styles={{
        control: (provided) => ({
            ...provided,
            backgroundColor: 'transparent',
            border: '1.7px solid white',
            borderRadius: '50px',
            padding: '6px 20px',
            boxShadow: 'none'
        }),
        singleValue: (provided) => ({
          ...provided,
          color: 'white',
          fontSize: '18px'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'white',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: 'white',
        }),
    }} value={formData.collage ? { value: formData.collage, label: formData.collage } : null} onChange={(e)=>setFormData({...formData, collage: e.value})} isSearchable={false} placeholder="Pendidikan" options={optionCollage}/>
        </span>
      </div>
      <InputCustom 
          type='number' 
          placeholder={'Jumlah Anak'} 
          classNameDiv={'border-2 rounded-full'} 
          className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}
          value={formData.numberOfChildren}
          eventOnChange={(e)=>setFormData({...formData, numberOfChildren: isHaveChildren ? 0 : e.target.value})}
          disabled={isHaveChildren}
          />
      <InputCustom 
          type='text'
          placeholder={'Pekerjaan'} 
          classNameDiv={'border-2 rounded-full'} 
          className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}
          value={formData.job}
          eventOnChange={(e)=>setFormData({...formData, job : e.target.value})}
          />
      <InputCustom 
          type='text'
          placeholder={'Range gaji'} 
          classNameDiv={'border-2 rounded-full'} 
          className={'border-none placeholder:text-white text-white focus:ring-0 py-3 lg:py-2 w-full text-[18px]'}
          value={formData.income}
          eventOnChange={(e)=>setFormData({...formData, income : e.target.value})}
          />
      <ButtonCustom 
          type='button'
          value={'SELANJUTNYA'} 
          className={'bg-[#D9D9D9] py-3 lg:py-2 mt-10 mb-5 lg:mt-2 text-white font-bold rounded-full'} 
          eventOnClick={()=>setSlide(2)}
          />
          </>
    } else if (slide == 2) {
      return <>
        <InputCustom 
            type='email' 
            placeholder={'Masukan email anda'} 
            classNameDiv={'border-2 rounded-full py-1 lg:py-0'} 
            className={'text-[19px] text-white placeholder:text-white w-full focus:ring-0 border-none'}
            value={formData.email}
            eventOnChange={(e)=>setFormData({...formData, email : e.target.value})}
            />
        <InputCustom 
            type='number' 
            classNameDiv={'border-2 rounded-full py-1 lg:py-0'} 
            className={'text-[19px] text-white placeholder:text-white w-full focus:ring-0 border-none'} 
            placeholder={'Masukan nomor telephone anda'}
            value={formData.phoneNumber}
            eventOnChange={(e)=>setFormData({...formData, phoneNumber : e.target.value})}
            />
        <InputCustom 
            type='password' 
            classNameDiv={'border-2 rounded-full py-1 md:pr-5 lg:pr-3 lg:py-0'} 
            className={'text-[19px] text-white placeholder:text-white w-full focus:ring-0 border-none'} 
            placeholder={'Kata sandi'}
            value={formData.password}
            eventOnChange={(e)=>setFormData({...formData, password: e.target.value})}
            />
        <InputCustom 
            type='password' 
            classNameDiv={'border-2 rounded-full py-1 md:pr-5 lg:pr-3 lg:py-0'} 
            className={'text-[19px] text-white placeholder:text-white w-full focus:ring-0 border-none'} 
            placeholder={'Konfirmasi kata sandi'}
            value={formData.passwordConfirmation}
            eventOnChange={(e)=>setFormData({...formData, passwordConfirmation: e.target.value})}
            />
        <ButtonCustom 
            type='submit'
            value={'MENDAFTAR'} 
            className={'bg-[#D9D9D9] font-bold text-white py-3 lg:py-1 mt-20 rounded-full'}
            />
        <p className='text-white pl-4'>Dengan mendaftar nda menyetujui syarat dan kebijakan yang dibuat oleh pondok</p>
        </>
    }
  }//end func render Slide

  return (
    <div className='fixed top-0 w-full z-50'>
        <section 
          className='bg-[#FAF8F1]/40 backdrop-blur-sm p-3 pb-0 w-full md:w-fit md:h-fit overflow-hidden flex flex-col md:flex-row md:justify-evenly md:gap-10 justify-center items-center absolute top-0 bottom-0 left-0 right-0 m-auto rounded-xl z-50'>
            {screenView == 'desktop' && 
            <header 
              className='relative w-[40vw] bg-white py-1'>
                <img src={heroImg} alt="Hero" className=''/>
                <h1 className='absolute top-0 bottom-0 flex justify-center items-center mx-auto left-0 right-0'></h1>
            </header>}
            <span 
              className='absolute right-4 rounded-full bg-[#D9D9D9] p-1 top-2 right-2 font-bold text-[18px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.5)] cursor-pointer' 
              onClick={()=>setIsShow(false)}><SlClose 
              className='text-[30px] md:text-[35px]'
              />
            </span>
              {slide == 1 ? <h1 className='text-[25px] lg:text-[20px] text-white font-bold'>Informasi Pribadi</h1> : 
        <span className='flex gap-x-12 items-center -mt-5 mb-4 self-start'>
          <ButtonCustom 
              type='button'
              className={'w-min h-min py-1 px-3 rounded-l-full text-white bg-slate-400'} 
              value={'Kembali'} 
              eventOnClick={()=>setSlide(1)}
              />
          <h1 className='text-[25px] lg:text-[20px] font-bold text-white'>Buat Akun</h1>
        </span>}
            <form 
              className='w-full md:w-[65vw] lg:w-[25vw] flex flex-col gap-5 md:m-10 lg:m-0 lg:mr-10 overflow-y-auto'
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