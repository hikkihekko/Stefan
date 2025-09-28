import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import logo from '../icons/stefan.svg'

const NavBar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeAnchor, setActiveAnchor] = useState<string>('')

  // Отслеживание активного якоря при скролле
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveAnchor('')
      return
    }

    const handleScroll = () => {
      const anchors = ['top', 'catalog', 'about', 'contacts']
      const scrollPosition = window.scrollY + 220 // учитываем offset навбара

      for (const anchor of anchors) {
        const element = document.getElementById(anchor)
        if (element) {
          const elementTop = element.offsetTop
          const elementBottom = elementTop + element.offsetHeight
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveAnchor(anchor)
            break
          }
        }
      }
    }

    // Проверяем сразу при загрузке
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (location.pathname === '/') {
      // На главной странице - скроллим к якорю #top с отступом 220px
      const element = document.getElementById('top')
      if (element) {
        const elementPosition = element.offsetTop
        const offsetPosition = elementPosition - 220
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      // На другой странице - переходим на главную к якорю
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById('top')
        if (element) {
          const elementPosition = element.offsetTop
          const offsetPosition = elementPosition - 220
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }

  const handleAnchorClick = (anchorId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (location.pathname === '/') {
      // На главной странице - скроллим к якорю
      const element = document.getElementById(anchorId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // На другой странице - переходим на главную к якорю
      navigate(`/#${anchorId}`)
      setTimeout(() => {
        const element = document.getElementById(anchorId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <div className="fixed top-6 z-50" style={{left: '50%', transform: 'translateX(-50%)', width: '100%'}}>
      <div className="container mx-auto px-6">
        <nav
          className="glass flex items-center justify-between relative"
          style={{ width: '100%', height: 98, borderRadius: 24, padding: '24px 24px' }}
        >
          <img src={logo} alt="Стефан" className="h-8 w-auto select-none" draggable={false} />

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="rounded-full bg-white text-slate-900 h-[50px] w-[550px] flex items-center justify-center px-4">
              <ul className="flex items-center justify-center gap-8 font-manrope text-[18px] leading-[12px] whitespace-nowrap">
                <li>
                  <a 
                    href="#" 
                    onClick={handleHomeClick}
                    className={`${(location.pathname === '/' && activeAnchor === 'top') || (location.pathname === '/' && activeAnchor === '') ? 'text-black font-medium' : 'text-[#3535B9] font-normal'} hover:opacity-80 cursor-pointer`}
                  >
                    Главная
                  </a>
                </li>
                <li>
                  <a 
                    href="#catalog" 
                    onClick={handleAnchorClick('catalog')}
                    className={`${activeAnchor === 'catalog' ? 'text-black font-medium' : 'text-[#3535B9] font-normal'} hover:opacity-80 cursor-pointer`}
                  >
                    Каталог
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    onClick={handleAnchorClick('about')}
                    className={`${activeAnchor === 'about' ? 'text-black font-medium' : 'text-[#3535B9] font-normal'} hover:opacity-80 cursor-pointer`}
                  >
                    О компании
                  </a>
                </li>
                <li>
                  <NavLink to="/articles" className={({ isActive }) => `text-[#3535B9] font-normal hover:opacity-80 ${isActive ? 'underline' : ''}` } > Статьи </NavLink>
                </li>
                <li>
                  <a 
                    href="#contacts" 
                    onClick={handleAnchorClick('contacts')}
                    className={`${activeAnchor === 'contacts' ? 'text-black font-medium' : 'text-[#3535B9] font-normal'} hover:opacity-80 cursor-pointer`}
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:+79857671500" className="text-white font-manrope font-medium hover:opacity-80 transition-opacity" style={{fontSize: 18}}>Позвоните нам! +7 (985) 767-15-00</a>
            <a href="https://wa.me/79857671500" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center justify-center bg-white rounded-full" style={{width:50,height:50}}>
              <img src={new URL('../icons/svg chat bubble.svg', import.meta.url).toString()} alt="Чат" width={18} height={18} />
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-full font-manrope text-white">
      <NavBar />
      <main style={{paddingTop: '146px'}}>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout


