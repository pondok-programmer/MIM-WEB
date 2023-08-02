import { useState } from 'react'
import { BsEyeSlash, BsEye } from 'react-icons/bs'

const InputCustom = ({type = 'text',placeholder,id,name,value,labelFor,labelValue,className,classNameDiv,icon}) => {
    const [isShow, setIsShow] = useState(false)
    const showError = false
  return (
    <div>
        { type === 'password' ? <><div className={`flex items-center ${classNameDiv}`}>{icon}<input type={isShow ? 'text' : 'password'} placeholder={placeholder} className={`${className} bg-transparent text-[#999]`} />{isShow ? <BsEyeSlash  className='text-xl md:text-[28px] text-[#999] mr-2 cursor-pointer' onClick={()=>setIsShow(!isShow)}/> : <BsEye  className='text-xl md:text-[28px] text-[#999] mr-2 cursor-pointer' onClick={()=>setIsShow(!isShow)}/>}</div>{showError && <p className='text-red-700'>password not match!</p>}</> 
                              : <div className={`flex ${classNameDiv} items-center`}>{icon}<input type={type} id={id} min='0' name={name} value={value} placeholder={placeholder} className={`${className} bg-transparent text-[#999]`} /><label htmlFor={labelFor} className='cursor-pointer'>{labelValue}</label></div>}
    </div>
  )
}

export default InputCustom