import { useState } from 'react'
import { BsEyeSlash, BsEye } from 'react-icons/bs'

const InputCustom = ({type = 'text',placeholder,id,name,value,eventOnChange,disabled,labelFor,labelValue,className,classNameDiv,icon}) => {
    const [isShow, setIsShow] = useState(false)
    const showError = false
  return (
    <div>
        { type === 'password' ? 
                              <><div 
                                  className={`flex items-center ${classNameDiv}`}>
                                    {icon}
                                  <input 
                                    type={isShow ? 'text' : 'password'} 
                                    placeholder={placeholder} 
                                    value={value} 
                                    onChange={eventOnChange}
                                    className={`${className} bg-transparent text-white`} 
                                    />
                                      {isShow ? 
                                              <BsEyeSlash  className='text-xl text-white md:text-[28px] text-white mr-2 cursor-pointer' 
                                              onClick={()=>setIsShow(!isShow)}/> 
                                              : 
                                              <BsEye  className='text-xl text-white md:text-[28px] text-white mr-2 cursor-pointer' 
                                              onClick={()=>setIsShow(!isShow)}/>}
                                  </div>{showError && <p className='text-red-700'>password not match!</p>}
                                </> 
                              : 
                              <div 
                                className={`flex ${classNameDiv} items-center`}>
                                  {icon}
                                <input 
                                type={type} 
                                id={id} 
                                min='0' 
                                name={name} 
                                value={value} 
                                onChange={eventOnChange}
                                placeholder={placeholder} 
                                className={`${className} bg-transparent text-white`} 
                                disabled={disabled}
                                />
                                <label 
                                htmlFor={labelFor} 
                                className='cursor-pointer'
                                >
                                  {labelValue}
                                </label>
                              </div>
        }
    </div>
  )
}

export default InputCustom