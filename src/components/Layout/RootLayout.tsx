import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../../icons/stefan.svg'
import chatIcon from '../../icons/svg chat bubble.svg'

const NavBar: React.FC = () => {

  return (
    <div className="fixed top-6 z-50" style={{left: '50%', transform: 'translateX(-50%)', width: '100%'}}>
      <div className="container mx-auto px-6">
        <nav
          className="glass flex items-center justify-between relative"
          style={{ width: '100%', height: 98, borderRadius: 24, padding: '24px 24px' }}
        >
          <img src={logo} alt="Стефан" className="h-8 w-auto select-none" draggable={false} />

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="rounded-full bg-white text-slate-900 h-[50px] w-[507px] flex items-center justify-center px-4">
              <ul className="flex items-center justify-center gap-8 font-manrope text-[16px] leading-[12px] whitespace-nowrap">
                <li>
                  <a href="#top" className="text-[#3535B9] font-normal hover:opacity-80">Главная</a>
                </li>
                <li>
                  <a href="#catalog" className="text-[#3535B9] font-normal hover:opacity-80">Каталог</a>
                </li>
                <li>
                  <a href="#about" className="text-[#3535B9] font-normal hover:opacity-80">О компании</a>
                </li>
                <li>
                  <NavLink to="/articles" className={({isActive}) => `${isActive ? 'text-black font-medium' : 'text-[#3535B9] font-normal'} hover:opacity-80`}>Статьи</NavLink>
                </li>
                <li>
                  <a href="#contacts" className="text-[#3535B9] font-normal hover:opacity-80">Контакты</a>
                </li>
              </ul>
            </div>
          </div>

          <a href="https://wa.me/79857671500" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center justify-center bg-white rounded-full" style={{width:50,height:50}}>
            <img src={chatIcon} alt="Чат" width={18} height={18} />
          </a>
        </nav>
      </div>
    </div>
  )
}

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-full font-manrope text-white">
      <NavBar />
      <main className="pt-28">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
