import { useState } from 'react'
import brandMIM from '../assets/imgs/logo-mim.png'
import { RiExpandRightLine, RiHome2Fill } from 'react-icons/ri'
import { MdMoreVert, MdKeyboardArrowRight } from 'react-icons/md'
import { FaHome, FaUserSecret, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const menuList = [{
      icon: <FaHome className='text-[30px] w-full'/>,
      title: 'Home',
      path: '/dashboard/',
    },{
      icon: <FaUsers className='text-[30px] w-full'/>,
      title: 'Pengguna',
      path: '/dashboard/pengguna',
      gap: true
    },{
      icon: <FaUserSecret className='text-[30px] w-full'/>,
      title: 'Admin',
      path: '/dashboard/admin',
    },{
      icon: <RiHome2Fill className='text-[30px] w-full'/>,
      title: 'Artikel',
      path: '/dashboard/artikel',
      gap: true
    },{
      icon: <RiHome2Fill className='text-[30px] w-full'/>,
      title: 'Buat Artikel',
      path: '/dashboard/buat-artikel',
    },{
      icon: <RiHome2Fill className='text-[30px] w-full'/>,
      title: 'Kajian',
      path: '/dashboard/kajian',
      gap: true
    },{
      icon: <RiHome2Fill className='text-[30px] w-full'/>,
      title: 'Buat Kajian',
      path: '/dashboard/buat-kajian',
    }]
    const name = 'Edward Supratman'

  return (
    <aside className={`${isExpanded ? 'w-48' : 'w-20'} duration-300 h-screen p-3 bg-gradient-to-t from-[#C58940] via-[#FAEAB1] to-[#ebcd9c] flex flex-col rounded-r-2xl shadow-[1px_0px__10px_2px_rgba(0,0,0,0.6)] relative`}>
        <MdKeyboardArrowRight className={`${isExpanded && 'rotate-180 -right-0'} absolute cursor-pointer -right-5 text-[16px] text-[#C58940] bottom-12 w-8 h-8 border-[3px] hover:bg-[#C58940] hover:text-white transition-all duration-800 border-white rounded-full`} title={`${isExpanded ? 'Perkecil' : 'Perluas'}`} onClick={()=>setIsExpanded(!isExpanded)}/>

        <div className='flex gap-x-5 items-center border-[#C58940] border-b-2 pb-3'>
          <img src={brandMIM} alt="Logo MIM" className={`w-[50px] cursor-pointer duration-500`} />
          <h1 className={`${!isExpanded && 'scale-0'} text-white origin-left font-semibold text-[20px] duration-200`}>Dashboard</h1>
        </div>
        <ul className='pt-6 flex-1 overflow-hidden'>
          {menuList.map((menu,idx) => (
            <Link to={menu.path} key={idx}>
            <li className={` text-gray-600 hover:text-white flex items-center gap-x-4 cursor-pointer p-[6px] border-b-4 border-[#E5BA73] bg-gradient-to-b from-[#E5BA73] to-transparent to-75% hover:bg-[#E5BA73] active:scale-95 active:border-2 hover:border-[#C58940] rounded-lg group ${menu.gap ? 'mt-7' : 'mt-2'}`}>
              {/* {menu.icon} */}
              <img src={brandMIM} alt="" className='w-[34px] pl-2'/>
              <span className={`${!isExpanded && 'hidden'} text-[15px] flex origin-left font-medium whitespace-nowrap`}>{menu.title}</span>
            {!isExpanded && <span className='absolute whitespace-nowrap bg-[#E5BA73] px-2 py-1 rounded-l-lg rounded-r-full left-full ml-2 shadow-[0px_0px_7px_rgba(0,0,0,0.7)] invisible -translate-x-5 transition-all opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0'>
              {menu.title}
            </span>}
            </li>
            </Link>
          ))}

        </ul>

        <span className='flex items-center justify-center gap-x-2 mb-5 cursor-pointer' onClick={()=> alert('logout')}>
        <img src={brandMIM} alt="" className='w-[34px] p-2 rounded-lg border-2'/>
              <span className={`${!isExpanded && 'hidden'} text-white text-[15px] flex origin-left font-medium whitespace-nowrap`}>Keluar</span>
        </span>

        <section className={`relative flex items-center gap-x-2 border-t-[2px] pt-3 group`}>
          <span className={` ml-[7px] rounded-full text-center border-2 py-1 px-2 cursor-pointer`}>
            <Link to={'/dashboard/info-saya'}>
              <p className='text-[20px] font-semibold text-white'>ES</p>
            </Link>
          </span>
          <span className={`${!isExpanded ? 'translate-x-[50px]' : 'translate-x-0'} duration-500 ease-in-out transition-all text-[15px] text-white hover:scale-105 flex whitespace-nowrap overflow-hidden`}>
             <p title={name} className='font-semibold truncate'>{name}</p>
          </span>
          <Link to={'/dashboard/info-saya'}>
            <MdMoreVert title='Detail' className={`${isExpanded ? 'visible' : 'invisible'} text-[30px] text-white hover:scale-125 duration-100 ease-linear transition-all cursor-pointer`}/>
          </Link>
            {!isExpanded && <span className='absolute whitespace-nowrap bg-[#E5BA73] px-2 py-1 rounded-l-lg rounded-r-full left-full ml-5 text-white shadow-[0px_0px_7px_rgba(0,0,0,0.7)] invisible -translate-x-7 transition-all opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0'>
              Info Saya
            </span>}
        </section>
    </aside>
  )
}

export default Sidebar