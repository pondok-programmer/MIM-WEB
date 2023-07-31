import BrandImgShort from '../assets/imgs/logo-mim.png'
import BrandImgLong from '../assets/imgs/logo-mim-long.png'
import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { IoIosArrowDown, IoIosClose } from 'react-icons/io'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [subMenu,setSubMenu] = useState(false)
const menuList = [{
  title: 'Beranda',
  event: 'alert("tes)',
  path: '#'
},{
  title: 'Tentang MIM',
  event: 'alert("tes)',
  path: '#about-us'
},{
  title: 'Fitur',
  event: 'alert("tes)',
  path: '#feature'
},{
  title: 'Informasi',
  event: 'alert("tes)',
  icon : <IoIosArrowDown className='text-[21px] md:text-[32px] lg:text-[27px]'/>,
  submenu: [{
    title: 'Info Kajian',
    path: '#kajian-info'
  },{
    title: 'Artikel Dakwah',
    path: '#dakwah-article'
  }]
},{
  title: 'Bergabung',
  path: '#',
  event: 'modal'
}]
const renderMenuNav = () => {
if(window.innerWidth <= 885){
  return <nav className='relative w-full h-[9vh] md:h-[8vh] fixed top-0 px-10 md:px-20 bg-[#E5BA73] flex justify-between items-center shadow-[3px_0px_10px_1px_rgba(0,0,0,0.40)]'>
  
    {isOpen ? <span className='bg-slate-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'><IoIosClose className='text-[26px]'/></span> : <span className='bg-slate-300 w-10 md:w-[65px] h-10 md:h-[65px] rounded-full flex justify-center items-center cursor-pointer' onClick={()=>setIsOpen(true)}><HiMenu className='text-[26px] md:text-[35px]'/></span>}
  
  <section className='w-[40vw] md:w-[24vw]'>
    <img src={BrandImgLong} alt="Logo MIM - Menghafal Itu Mudah"/>
  </section>
                                                    
  <>
  <aside className={`absolute h-screen w-[49%] ${isOpen ? 'translate-x-[0px] duration-300 transiton-all ease-in-out' : 'translate-x-[-500px] duration-500 transiton-all ease-in'} flex flex-col justify-between items-center pt-2 md:pt-4 pb-10 md:pb-20 top-0 left-0 bg-[#E5BA73] shadow-[3px_0px_10px_1px_rgba(0,0,0,0.40)] z-50`}>
    <span className='bg-slate-300 w-10 md:w-[65px] h-10 md:h-[65px] rounded-full self-start ml-10 md:ml-20 flex justify-center items-center cursor-pointer' onClick={()=>setIsOpen(false)}><IoIosClose className='text-[26px] md:text-[40px]'/></span>
    <ul>
    {menuList.map((data)=>{
      return data.icon ? <li key={data.title} className='text-[19px] md:text-[32px] text-white font-[600] my-5 md:my-10 px-3 py-1 flex justify-center items-center gap-4 border-[3.1px] md:border-[4.5px] rounded-md md:rounded-lg hover:bg-slate-200 last:mt-40 md:last:mt-60 last:border-none last:bg-[#C58940] last:p-2 relative' onClick={()=>setSubMenu(!subMenu)}>{data.title}{data.icon&&<><span className='text-[22px]'>{data.icon}</span>{subMenu&&<section className={` absolute w-full top-9 md:top-14 bg-[#FAF8F1]`}>{data.submenu.map(sub => {return <span key={sub.title} className='text-[18px] md:text-[30px] pl-1 text-[#C58940] hover:bg-slate-200 block w-full' onClick={()=>alert('yes')}>{sub.title}</span>})}</section>}</>}</li> : <li key={data.title} className='text-[19px] md:text-[32px] text-white font-[600] my-5 md:my-10 px-3 py-1 flex justify-center items-center gap-4 border-[3.1px] md:border-[4.5px] rounded-md md:rounded-lg hover:bg-slate-200 last:mt-40 md:last:mt-60 last:border-none last:bg-[#C58940] last:p-2 md:last:p-3 relative' onClick={()=>setSubMenu(false)}>{data.title}{data.icon&&<><span className='text-[22px]'>{data.icon}</span>{subMenu&&<section className={` absolute w-full top-9 md:top-14 bg-[#FAF8F1]`}>{data.submenu.map(sub => {return <span key={sub.title} className='text-[18px] md:text-[30px] hover:bg-slate-200 block w-full' onClick={()=>alert('yes')}>{sub.title}</span>})}</section>}</>}</li>
    })
    }</ul>
  </aside>
    {isOpen && <div className='bg-black opacity-40 h-screen w-full fixed top-0 left-0' onClick={()=>setIsOpen(false)}></div>}
    </>
</nav>
} else {
  return <nav className='w-full h-[10vh] bg-[#E5BA73] fixed flex items-center justify-between px-20'>
  <section className='w-[5vw]'>
    <img src={BrandImgShort} alt="Logo MIM - Menghafal Itu Mudah" className='bg-slate-200 rounded-full p-2'/>
  </section>
  <section><ul className='flex'>
  {menuList.map((data)=>{
    return data.icon ? <li key={data.title} className='text-[20px] text-white font-[500] mx-4 px-4 py-1 border-[3.8px] rounded-xl last:border-none last:bg-[#C58940] last:ml-[143px] cursor-pointer flex justify-center items-center relative' onClick={()=>setSubMenu(!subMenu)}>{data.title}{data.icon&&<><span className='text-[22px] ml-4'>{data.icon}</span>{subMenu&&<section className={`rounded-b-md absolute w-full top-[38px] bg-[#C58940] -z-10`}>{data.submenu.map(sub => {return <span key={sub.title} className='text-[20px] p-2 hover:bg-slate-200 block w-full' onClick={()=>alert('yes')}>{sub.title}</span>})}</section>}</>}</li> : <li key={data.title} className='text-[20px] text-white font-[500] mx-4 px-4 py-1 border-[3.8px] rounded-xl last:border-none last:bg-[#C58940] last:ml-[143px] cursor-pointer flex justify-center items-center relative' onClick={()=>setSubMenu(false)}>{data.title}{data.icon&&<><span className='text-[22px]'>{data.icon}</span>{subMenu&&<section className={` absolute w-full top-9 md:top-14 bg-[#C58940]`}>{data.submenu.map(sub => {return <span key={sub.title} className='text-[18px] md:text-[30px] hover:bg-slate-200 block w-full' onClick={()=>alert('yes')}>{sub.title}</span>})}</section>}</>}</li>
  })
  }</ul></section>
</nav>
}
}
  return (
    <>{renderMenuNav()}</>
  )
}

export default Navbar